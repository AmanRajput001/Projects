const input = document.getElementById('input');
const apiKey = "839e6f7b1b0a0db4be45de30ef6debd0";

const detailcard = document.getElementById('detailcard')
const loc = document.getElementById('location');
const humidity = document.getElementById('humidity');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');  
const weatherImage = document.getElementById('weatherImage')
const description = document.getElementById('description')

function getWeather() {
    const cityName = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {                       
                loc.innerText = 'Incorrect City Name !!';
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            detailcard.classList.remove('d-none')
            loc.innerText = `${data.name}`;
            temp.innerText = `Temperature: ${data.main.temp}°C`;
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
            wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;
            
            weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            description.innerText = `${data.weather[0].description}`
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

input.addEventListener('change', getWeather);
