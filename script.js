const apiKey = "481f31a3e547ea19daccaeee2b6c39a6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
let searchBox = document.querySelector(".search-section input");
let searchBtn = document.querySelector(".btn");

async function getWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apiKey}&units=metric`);
    var data = await response.json();
    console.log(data);
    // if(data.name!=city) {
    //     document.querySelector(".city").innerHTML = "Not available";
    //     document.querySelector(".temperature").innerHTML = "not available";
    //     document.querySelector(".humidity").innerHTML = "Humidity: " + NaN;
    //     document.querySelector(".wind-speed").innerHTML = "Wind Speed: " + NaN;
    //     return;
    // }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = "Wind Speed: " + data.wind.speed + " km/h";

    let weatherCondition = data.weather[0].main.toLowerCase();
    let iconSrc = "images/clear.png"; 


    if (weatherCondition === "rain") {
        iconSrc = "images/rain.png";
    } else if (weatherCondition === "clouds") {
        iconSrc = "images/clouds.png";
    } else if (weatherCondition === "sunny") {
        iconSrc = "images/sunny.png";
    } else if (weatherCondition === "snow") {
        iconSrc = "images/snow.png";
    } else if(weatherCondition === "clear"){
        iconSrc = "images/clear.png";
    } else if(weatherCondition === "clear"){
        iconSrc = "images/drizzle.png";
    } else if(weatherCondition === "mist"){
        iconSrc = "images/mist.png";
    } else if(weatherCondition === "wind"){
        iconSrc = "images/wind.png";
    }

    document.querySelector(".weather-icon img").src = iconSrc;
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});
