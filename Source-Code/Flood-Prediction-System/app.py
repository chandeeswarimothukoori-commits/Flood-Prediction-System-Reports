from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(
    __name__,
    template_folder="Templates",
    static_folder="Static"
)

model = joblib.load("/home/rgukt123/Flood-Prediction-System/Notebook/Models/floods.save")
scaler = joblib.load("/home/rgukt123/Flood-Prediction-System/Notebook/Models/transform.save")

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/Predict")
def predict_page():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    try:
        temp = float(request.form["Temp"])
        humidity = float(request.form["Humidity"])
        annual = float(request.form["ANNUAL"])
        jan_feb = float(request.form["Jan-Feb"])
        mar_may = float(request.form["Mar-May"])
        jun_sep = float(request.form["Jun-Sep"])
        oct_dec = float(request.form["Oct-Dec"])
        avgjune = float(request.form["avgjune"])

        input_data = pd.DataFrame([[

            temp,
            humidity,
            annual,
            jan_feb,
            mar_may,
            jun_sep,
            oct_dec,
            avgjune

        ]], columns=[
            "Temp",
            "Humidity",
            "ANNUAL",
            "Jan-Feb",
            "Mar-May",
            "Jun-Sep",
            "Oct-Dec",
            "avgjune"
        ])

        # Scale input
        input_scaled = scaler.transform(input_data)

        # Predict
        prediction = model.predict(input_scaled)

        if hasattr(model, "predict_proba"):
            probability = model.predict_proba(input_scaled)
            flood_probability = probability[0][1] * 100
            safe_probability = probability[0][0] * 100
        else:
            flood_probability = 100 if prediction[0] == 1 else 0
            safe_probability = 100 - flood_probability


        if prediction[0] == 1:
            return render_template(
                "chance.html",
                flood_probability=round(flood_probability, 2),
                safe_probability=round(safe_probability, 2)
            )
        else:
            return render_template(
                "no_chance.html",
                flood_probability=round(flood_probability, 2),
                safe_probability=round(safe_probability, 2)
            )
    except Exception as e:
        return f"Prediction Error: {e}", 500


if __name__ == "__main__":
    app.run(debug=True)