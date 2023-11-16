const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.75;
const lon = 6.63;
const apiKey = 'b824e6d324073d6895e2fa9bd1af574a';


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    tempNum = (data.main.temp).toFixed();
    currentTemp.innerHTML = `${tempNum} &deg;F`
    const iconscr = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconscr)
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon` )

    const description = data.weather[0].description.toString();
    captionDesc.textContent = data.weather[0].description;

}

apiFetch();