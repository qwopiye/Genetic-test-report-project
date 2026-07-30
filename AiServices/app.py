from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

model = joblib.load("model.pkl")
encoders = joblib.load("encoders.pkl")

target = "Outcome_Status"

feature_columns = [
    "Patient_ID", "Age", "Gender", "Cancer_Type", "Laterality",
    "Stage_at_Diagnosis", "Treatment_Type", "Surgery_Status",
    "Radiation_Therapy", "Chemotherapy", "Genetic_Markers", "Family_History"
]

def process_input(data):
    input_data = {}
    for col in feature_columns:
        value = data.get(col)

        if isinstance(encoders, dict) and col in encoders:
            try:
                value = encoders[col].transform([str(value)])[0]
            except:
                value = 0
        else:
            try:
                value = float(value)
            except:
                value = 0

        input_data[col] = value
    return input_data
    print(input_data)


# 👉 পুরনো HTML form route (browser থেকে সরাসরি টেস্ট করার জন্য)
@app.route("/", methods=["GET", "POST"])
def home():
    prediction = None
    if request.method == "POST":
        input_data = process_input(request.form)
        input_df = pd.DataFrame([input_data])
        pred = model.predict(input_df)
    

        if isinstance(encoders, dict):
            prediction = encoders[target].inverse_transform(pred)[0]
        else:
            prediction = pred[0]

    return render_template("base.html", prediction=prediction)


# 👉 নতুন JSON API route (Node.js/React থেকে কল করার জন্য)
@app.route("/predict", methods=["POST"])
def predict_api():
    try:
        # req.body থেকে আসা JSON ডাটা
        json_data = request.get_json()
        features = json_data.get("features", json_data)  # features key থাকলে সেটা নাও, নাহলে পুরো object

        input_data = process_input(features)
        input_df = pd.DataFrame([input_data])
        pred = model.predict(input_df)

        if isinstance(encoders, dict):
            prediction = encoders[target].inverse_transform(pred)[0]
        else:
            prediction = pred[0]

        return jsonify({"prediction": str(prediction)})

    except Exception as e:
        print("Prediction error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)