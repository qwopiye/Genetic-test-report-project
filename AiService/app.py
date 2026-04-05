from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()

# Load trained model


@app.get("/")
def home():
    return {"message": "AI Service Running"}

