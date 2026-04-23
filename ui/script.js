const form = document.getElementById("predictionForm");
const resultBox = document.getElementById("resultBox");
const predictBtn = document.getElementById("predictBtn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
    gender: document.getElementById("gender").value,
    seniorCitizen: document.getElementById("seniorCitizen").value,
    partner: document.getElementById("partner").value,
    dependents: document.getElementById("dependents").value,
    tenure: document.getElementById("tenure").value,
    monthlyCharges: document.getElementById("monthlyCharges").value,
    totalCharges: document.getElementById("totalCharges").value,
    phoneService: document.getElementById("phoneService").value,
    internetService: document.getElementById("internetService").value,
    contract: document.getElementById("contract").value,
    paymentMethod: document.getElementById("paymentMethod").value
  };

  console.log("Form Data:", formData);

  predictBtn.textContent = "Predicting...";
  predictBtn.disabled = true;
  predictBtn.innerHTML = 'Predicting... <span class="loading"></span>';

  try {
    /*
      API geldiğinde burayı açacağız.

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
    */

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const fakePrediction = Math.random() > 0.5 ? 1 : 0;

    if (fakePrediction === 1) {
      resultBox.className = "result-box high-risk";
      resultBox.innerHTML = `
        <h3>High Churn Risk</h3>
        <p>This customer is likely to churn.</p>
        <span>
          This is currently a demo result. Real API prediction will be connected later.
        </span>
      `;
    } else {
      resultBox.className = "result-box low-risk";
      resultBox.innerHTML = `
        <h3>Low Churn Risk</h3>
        <p>This customer is not likely to churn.</p>
        <span>
          This is currently a demo result. Real API prediction will be connected later.
        </span>
      `;
    }
  } catch (error) {
    console.error("Prediction error:", error);

    resultBox.className = "result-box empty";
    resultBox.innerHTML = `
      <h3>Something went wrong</h3>
      <p>The prediction could not be completed.</p>
      <span>Please try again later.</span>
    `;
  } finally {
    predictBtn.textContent = "Predict";
    predictBtn.disabled = false;
  }
});