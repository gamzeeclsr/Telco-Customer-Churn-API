const form = document.getElementById("predictionForm");
const resultBox = document.getElementById("resultBox");
const predictBtn = document.getElementById("predictBtn");

const API_URL = "http://127.0.0.1:8000/predict";

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const customerData = {
    gender: document.getElementById("gender").value,
    SeniorCitizen: Number(document.getElementById("seniorCitizen").value),
    Partner: document.getElementById("partner").value,
    Dependents: document.getElementById("dependents").value,
    tenure: Number(document.getElementById("tenure").value),
    PhoneService: document.getElementById("phoneService").value,
    MultipleLines: document.getElementById("multipleLines").value,
    InternetService: document.getElementById("internetService").value,
    OnlineSecurity: document.getElementById("onlineSecurity").value,
    OnlineBackup: document.getElementById("onlineBackup").value,
    DeviceProtection: document.getElementById("deviceProtection").value,
    TechSupport: document.getElementById("techSupport").value,
    StreamingTV: document.getElementById("streamingTV").value,
    StreamingMovies: document.getElementById("streamingMovies").value,
    Contract: document.getElementById("contract").value,
    PaperlessBilling: document.getElementById("paperlessBilling").value,
    PaymentMethod: document.getElementById("paymentMethod").value,
    MonthlyCharges: Number(document.getElementById("monthlyCharges").value),
    TotalCharges: Number(document.getElementById("totalCharges").value)
  };

  predictBtn.disabled = true;
  predictBtn.innerHTML = 'Predicting... <span class="loading"></span>';

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerData)
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    const probabilityPercent = (data.churn_probability * 100).toFixed(2);

    if (data.prediction === 1) {
      resultBox.className = "result-box high-risk";
      resultBox.innerHTML = `
        <h3>High Churn Risk</h3>
        <p>This customer is likely to churn.</p>
        <span>Churn probability: ${probabilityPercent}%</span>
      `;
    } else {
      resultBox.className = "result-box low-risk";
      resultBox.innerHTML = `
        <h3>Low Churn Risk</h3>
        <p>This customer is not likely to churn.</p>
        <span>Churn probability: ${probabilityPercent}%</span>
      `;
    }
  } catch (error) {
    console.error("Prediction error:", error);

    resultBox.className = "result-box empty";
    resultBox.innerHTML = `
      <h3>Something went wrong</h3>
      <p>The prediction could not be completed.</p>
      <span>Please make sure the API is running.</span>
    `;
  } finally {
    predictBtn.textContent = "Predict";
    predictBtn.disabled = false;
  }
});