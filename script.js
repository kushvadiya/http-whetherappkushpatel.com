const inputbox = document.querySelector(".searchbar");
const search = document.querySelector(".sbutton");
const whetherimg = document.querySelector(".img");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const wind = document.querySelector(".windspeed");
const humidity = document.querySelector(".humidity");


async function checkwhether(cities) {
    const api_key = "de3441a2d30f2c1716b64a9062b333f6";
    const url = `https:api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if (weather_data.cod === `404`) {

        city.innerHTML = "Invalid City Name";
        whetherimg.src = "/resources/error.webp";
        temp.innerHTML = 'error';
        humidity.innerHTML ="error";
        wind.innerHTML = 'error';
    }
    else {
        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        city.innerHTML = `${weather_data.name}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind.innerHTML = `${weather_data.wind.speed}km/hr`;
    }
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            whetherimg.src = "/resources/clouds.png";
            break;

        case 'Clear':
            whetherimg.src = "/resources/sun.jpg";
            break;
        case 'Rain':
            whetherimg.src = "/resources/icon.png";
            break;
        case 'Mist':
            whetherimg.src = "/resources/mist.png";
            break;
        case 'Snow':
            whetherimg.src = "/resources/snow.jpg";
            break;
        case 'Smoke':
            whetherimg.src = "/resources/sun.jpg";
            break;
        default:
            whetherimg.src = "/resources/error.webp";
    }
}

search.addEventListener('click', () => {
    checkwhether(inputbox.value);
});


