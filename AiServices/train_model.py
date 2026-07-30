import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import joblib

df = pd.read_csv("eye_cancer_patients.csv")

df.columns = df.columns.str.strip()

# if "Patient_ID" in df.columns:
#     df.drop("Patient_ID", axis=1, inplace=True)
if "Date_of_Diagnosis" in df.columns:
    df.drop("Date_of_Diagnosis", axis=1, inplace=True)




if "Country" in df.columns:
    df.drop("Country", axis=1, inplace=True)

df.fillna("Unknown", inplace=True)

if "Survival_Time_Months" in df.columns:
    df.drop("Survival_Time_Months", axis=1, inplace=True)

df.fillna("Unknown", inplace=True)
encoders = {}

for col in df.columns:
    if df[col].dtype == "object":
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col].astype(str))
        encoders[col] = le

target = "Outcome_Status"

X = df.drop(target, axis=1)
y = df[target]

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)

joblib.dump(model, "model.pkl")
joblib.dump(encoders, "encoders.pkl")

print("Done")