# 🌊 Rising Waters – Flood Prediction System

## Overview

Rising Waters is a Machine Learning-based Flood Prediction System that predicts the likelihood of flooding based on weather and rainfall parameters. The application uses a trained Machine Learning model integrated with a Flask web application to provide real-time flood risk predictions through an interactive user interface.

---

## Features

- 🌧️ Predicts flood risk using Machine Learning
- 📊 Displays Flood Probability and Safe Probability
- 📄 Downloadable Flood Prediction Report
- 🖥️ Modern and Responsive User Interface
- ⚡ Fast prediction using trained ML model
- 📈 Supports multiple weather parameter inputs
- 🔒 Reliable Flask backend

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome

### Backend

- Python
- Flask

### Machine Learning

- Scikit-learn
- XGBoost
- Pandas
- NumPy
- Joblib

---

## Project Structure

```
Flood-Prediction-System/
│
├── app.py
├── requirements.txt
├── README.md
│
├── Models/
│   ├── floods.save
│   └── transform.save
│
├── Templates/
│   ├── home.html
│   ├── index.html
│   ├── chance.html
│   └── no_chance.html
│
├── Static/
│   ├── css/
│   ├── js/
│   └── images/
│
└── Notebook/
    └── Flood_Prediction.ipynb
```

---

## Input Parameters

The prediction model uses the following weather parameters:

- Temperature
- Humidity
- Annual Rainfall
- Jan-Feb Rainfall
- Mar-May Rainfall
- Jun-Sep Rainfall
- Oct-Dec Rainfall
- Average June Rainfall

---

## Machine Learning Models

The project evaluates multiple algorithms:

- Decision Tree
- Random Forest
- K-Nearest Neighbors (KNN)
- XGBoost

The best-performing model is saved and deployed using Joblib.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/chandeeswarimothukoori-commits/Flood-Prediction-System.git
```

Go to the project directory:

```bash
cd Flood-Prediction-System
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open your browser:

```
http://127.0.0.1:5000
```

---

## Future Enhancements

- Live weather API integration
- GIS-based flood mapping
- SMS and Email alerts
- Mobile application
- Cloud deployment
- Historical flood visualization

---

## Author

**Medha Prakash**

B.Tech – Computer Science Engineering

Rajiv Gandhi University of Knowledge Technologies (RGUKT)

---

## License

This project is developed for academic and educational purposes.
