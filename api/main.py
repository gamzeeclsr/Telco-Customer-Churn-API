import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.schemas import CustomerInput
from api.preprocessing import preprocess_input


MODEL_PATH = "models/xgboost_first_iteration.pkl"

app = FastAPI(
    title="Telco Churn Prediction API",
    description="Customer churn prediction API using XGBoost model",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load(MODEL_PATH)


@app.get("/")
def root():
    return {"message": "Telco Churn Prediction API is running"}


@app.post("/predict")
def predict(customer: CustomerInput):
    input_df = preprocess_input(customer.model_dump())

    prediction = model.predict(input_df)[0]
    probability = model.predict_proba(input_df)[0][1]

    result = "Churn" if prediction == 1 else "No Churn"

    return {
        "prediction": int(prediction),
        "result": result,
        "churn_probability": round(float(probability), 4),
    }