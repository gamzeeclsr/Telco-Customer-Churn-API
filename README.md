# 🚀 Telco Customer Churn Analizi

## 📌 Proje Özeti ve Amaç
Bu proje, **Yapay Zeka ve Teknoloj Akademisi** kapsamında **Veri Bilimi** için gerçekleştirilen bir çalışmadır.  

Projenin amacı, telekom sektörüne ait müşteri verileri üzerinde analizler yaparak müşteri kaybı (churn) davranışını anlamaktır.  

Bu kapsamda:
- Ham veri seti incelenmiştir  
- Veri temizleme işlemleri gerçekleştirilmiştir  
- Keşifsel veri analizi (EDA) yapılmıştır  

---

## 📁 Proje Yapısı
```bash
telco-customer-churn/
│
├── data/
│   ├── raw/                  # Ham veri
│   └── processed/            # Temizlenmiş veri
│
├── notebooks/
│   ├── 01_eda.ipynb
│   └── 02_data_cleaning.ipynb
│
├── src/
├── models/                   # Eğitilmiş model çıktıları
├── api/                      # API katmanı
├── ui/                       # Arayüz (opsiyonel)
├── app/                      # Uygulama katmanı
│
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Kullanılan Teknolojiler
Python  
Pandas  
NumPy  
Jupyter Notebook  
Docker  

---

## 📊 Veri Seti

Projede, Telco Customer Churn veri seti kullanılmaktadır.

Veri seti aşağıdaki bilgileri içermektedir:

Müşteri sözleşme bilgileri  
Aylık ücretler  
Kullanım süresi (tenure)  
Hizmet detayları  

Hedef değişken:

Churn (müşteri ayrıldı mı?)

---
