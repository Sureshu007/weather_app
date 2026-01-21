
function showWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        document.getElementById("weatherDisplay").innerText = "Please enter a city name!";
        return;
    }

    const temps = [22, 24, 28, 30, 35];
    const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Clear"];
    const humidities = [45, 55, 60, 70, 80];
    const winds = [2.5, 3.8, 5.0, 6.3, 4.4];

    const temp = temps[Math.floor(Math.random() * temps.length)];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const humidity = humidities[Math.floor(Math.random() * humidities.length)];
    const wind = winds[Math.floor(Math.random() * winds.length)];

    const weatherReport = `
        📍 <strong>${city}</strong><br>
        🌡️ Temperature: <strong>${temp} °C</strong><br>
        ☁️ Condition: <strong>${condition}</strong><br>
        💧 Humidity: <strong>${humidity}%</strong><br>
        🌬️ Wind Speed: <strong>${wind} m/s</strong>
    `;
    document.getElementById("weatherDisplay").innerHTML = weatherReport;
}