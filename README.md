# 🚀 Telco Customer Churn Prediction

> A full end-to-end Data Science project — from raw data to machine learning models — built as part of the **Artificial Intelligence & Technology Academy** Data Science programme.

---

## 📌 Project Overview

Customer churn — the decision of a customer to leave a service provider — is one of the most critical business problems in the telecom industry. Acquiring a new customer costs five to seven times more than retaining an existing one, making proactive churn prediction a high-value analytical capability.

This project analyses a real-world Telco dataset to:
- Understand **which customers are most likely to churn** and why
- Identify the **key behavioural and contractual signals** that precede churn
- Build **machine learning models** capable of predicting churn on unseen customers
- Deliver **actionable business recommendations** ranked by retention impact

---

## 📁 Project Structure

```bash
telco-customer-churn/
│
├── data/
│   ├── raw/                              # Original, unmodified dataset
│   └── processed/                        # Cleaned & encoded dataset (cleaned_data.csv)
│
├── notebooks/
│   ├── EDA.ipynb                         # Exploratory Data Analysis
│   └── _DecisionTree_RandomForest.ipynb  # ML pipeline & model evaluation
│
├── src/                                  # Reusable source modules
├── models/                               # Serialised trained model outputs
├── api/                                  # API serving layer
├── ui/                                   # Optional frontend interface
├── app/                                  # Application layer
│
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| Python 3 | Core language |
| Pandas & NumPy | Data manipulation |
| Matplotlib & Seaborn | Visualisation |
| Scikit-learn | ML modelling & evaluation |
| Jupyter Notebook | Interactive analysis |
| Docker | Containerised deployment |

---

## 📊 Dataset

The project uses the **Telco Customer Churn** dataset.

| Property | Detail |
|----------|--------|
| Target variable | `Churn` — Yes (customer left) / No (customer stayed) |
| Class distribution | ~73% No Churn · ~27% Churn (**imbalanced**) |
| Key features | Contract type, Monthly Charges, Tenure, Internet Service, Payment Method, add-on services |

> ⚠️ **Class imbalance** was addressed using stratified train/test splits. Future iterations should explore SMOTE oversampling and `class_weight='balanced'`.

---

## 🔍 Exploratory Data Analysis (EDA)

The EDA notebook (`EDA.ipynb`) covers five structured sections:

1. **Setup & Initial Data Exploration** — data loading, type inspection, statistical summaries, outlier detection
2. **Categorical Features vs. Churn** — dynamic countplot grid for all 16 categorical variables
3. **EDA Insights & Strategic Action Plan** — business-level findings ranked by churn-reduction impact
4. **Feature Engineering & Encoding** — Binary, Ordinal, and One-Hot encoding
5. **Correlation Analysis** — ranked feature correlations with the churn target

### Key EDA Findings

#### 🔴 Biggest Churn Drivers
| Feature | Finding |
|---------|---------|
| **Contract Type** | Month-to-month customers churn at the highest rate by a significant margin |
| **Internet Service** | Fiber Optic users show dramatically higher churn than DSL or no-service customers |
| **Payment Method** | Electronic check / manual payers are the highest-risk payment segment |
| **Monthly Charges** | Customers billed $70–100/month cluster strongly in the churned group |
| **Tech Support** | Customers without tech support leave at the first friction point |

#### 🔵 Strongest Retention Anchors
| Feature | Finding |
|---------|---------|
| **Contract Type** | Long-term (1-year, 2-year) contracts are the single most powerful retention mechanism |
| **Tenure** | The longer a customer stays, the less likely they are to leave — strong habit & sunk cost effect |
| **Tech Support** | Supported customers show dramatically lower early-churn rates |
| **Online Security & Backup** | Add-on subscribers perceive higher bundle value — stickier customers |

#### ⚪ Noise Variables (excluded from modelling)
- **Gender** — near-perfectly balanced, no churn signal
- **Phone Service** — uniform distribution across churn groups
- **Multiple Lines** — marginal effect, not worth the added complexity

#### Numerical Feature Insights
- **Tenure**: Churned customers have a strongly left-skewed distribution — most leave within the first few months.
- **Monthly Charges**: Clear separation between churners (~$70–100) and retained customers.
- **Total Charges**: Near-linear correlation with tenure × monthly charges — potential multicollinearity; treat as derived feature.
- **Outliers**: IQR analysis confirmed no significant outliers in numerical columns.

---

## 🤖 Machine Learning Pipeline

The ML notebook (`_DecisionTree_RandomForest.ipynb`) trains and compares classification models.

### Preprocessing

| Strategy | Applied To |
|----------|-----------|
| Binary Encoding (Yes → 1, No → 0) | 12 binary columns |
| Ordinal Encoding | `Contract` (Month-to-month=0, One year=1, Two year=2) |
| One-Hot Encoding (`drop_first=True`) | `PaymentMethod`, `InternetService` |

### Train / Test Split

| Parameter | Value | Reason |
|-----------|-------|--------|
| `test_size` | 0.20 | Standard 80/20 split for medium-sized datasets |
| `random_state` | 42 | Reproducibility |
| `stratify=y` | Enabled | Preserves ~26% churn ratio in both train and test sets |

### Models

> 🔧 *This section will be updated as models are finalised.*

### Evaluation Metrics

| Metric | Why It Matters for Churn |
|--------|--------------------------|
| **Accuracy** | Overall correctness across both classes |
| **Precision / Recall / F1** | Captures the cost of False Negatives (missed churners) |
| **ROC-AUC** | Threshold-independent performance — preferred for imbalanced classes |
| **Confusion Matrix** | Breaks down TP, TN, FP, FN — critical for understanding business cost of errors |

> In churn prediction, **False Negatives are the most costly error** — a missed churner is a lost customer.

---

## 📈 Business Recommendations

Based on EDA findings, the following actions are ranked by expected churn-reduction impact.

### 🔴 High Priority
- Incentivise month-to-month customers to upgrade to long-term contracts
- Audit Fiber Optic service for pricing & quality gaps
- Migrate electronic-check users to automatic payment methods
- Offer proactive tech support to new and high-billing customers

### 🟡 Medium Priority
- Bundle Online Security & Backup into standard packages
- Launch Family & Partner plans to increase solo customer retention
- Design dedicated plans and support channels for senior citizens

### 🟢 Low Priority
- Use streaming services as a promotional gift for contract upgrades
- Launch a loyalty programme for the paperless billing segment

---

## 🚀 Setup & How to Run

> 🔧 *This section will be updated by the team once the full pipeline is finalised.*

### Prerequisites
```bash
Python 3.8+
pip
```

### Installation
```bash
git clone https://github.com/gamzeeclsr/Telco-Customer-Churn-API.git
cd Telco-Customer-Churn-API
pip install -r requirements.txt
```

### Run Notebooks
```bash
jupyter notebook notebooks/EDA.ipynb
jupyter notebook notebooks/_DecisionTree_RandomForest.ipynb
```

---

## 📦 Requirements

> 🔧 *Will be updated with pinned versions once all modules are complete.*
