import pandas as pd


MODEL_COLUMNS = [
    "gender",
    "SeniorCitizen",
    "Partner",
    "Dependents",
    "tenure",
    "PhoneService",
    "MultipleLines",
    "OnlineSecurity",
    "OnlineBackup",
    "DeviceProtection",
    "TechSupport",
    "StreamingTV",
    "StreamingMovies",
    "Contract",
    "PaperlessBilling",
    "MonthlyCharges",
    "TotalCharges",
    "PaymentMethod_Credit card (automatic)",
    "PaymentMethod_Electronic check",
    "PaymentMethod_Mailed check",
    "InternetService_Fiber optic",
    "InternetService_No",
]


def yes_no_encode(value: str) -> int:
    return 1 if value == "Yes" else 0


def preprocess_input(data: dict) -> pd.DataFrame:
    processed = {
        "gender": 1 if data["gender"] == "Male" else 0,
        "SeniorCitizen": data["SeniorCitizen"],
        "Partner": yes_no_encode(data["Partner"]),
        "Dependents": yes_no_encode(data["Dependents"]),
        "tenure": data["tenure"],
        "PhoneService": yes_no_encode(data["PhoneService"]),
        "MultipleLines": 1 if data["MultipleLines"] == "Yes" else 0,
        "OnlineSecurity": 1 if data["OnlineSecurity"] == "Yes" else 0,
        "OnlineBackup": 1 if data["OnlineBackup"] == "Yes" else 0,
        "DeviceProtection": 1 if data["DeviceProtection"] == "Yes" else 0,
        "TechSupport": 1 if data["TechSupport"] == "Yes" else 0,
        "StreamingTV": 1 if data["StreamingTV"] == "Yes" else 0,
        "StreamingMovies": 1 if data["StreamingMovies"] == "Yes" else 0,
        "Contract": contract_encode(data["Contract"]),
        "PaperlessBilling": yes_no_encode(data["PaperlessBilling"]),
        "MonthlyCharges": data["MonthlyCharges"],
        "TotalCharges": data["TotalCharges"],

        "PaymentMethod_Credit card (automatic)": 1 if data["PaymentMethod"] == "Credit card (automatic)" else 0,
        "PaymentMethod_Electronic check": 1 if data["PaymentMethod"] == "Electronic check" else 0,
        "PaymentMethod_Mailed check": 1 if data["PaymentMethod"] == "Mailed check" else 0,

        "InternetService_Fiber optic": 1 if data["InternetService"] == "Fiber optic" else 0,
        "InternetService_No": 1 if data["InternetService"] == "No" else 0,
    }

    df = pd.DataFrame([processed])
    df = df[MODEL_COLUMNS]

    return df


def contract_encode(value: str) -> int:
    mapping = {
        "Month-to-month": 0,
        "One year": 1,
        "Two year": 2,
    }

    return mapping.get(value, 0)