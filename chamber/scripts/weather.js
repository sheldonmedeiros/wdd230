function closeBanner() {
    document.getElementById("meetGreetBanner").style.display = "none";
    localStorage.setItem("bannerClosed", true);
}

// Function to check the day and display the banner accordingly
function checkDayAndDisplayBanner() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    // Check if it's Monday, Tuesday, or Wednesday
    if (['Monday', 'Tuesday', 'Wednesday'].includes(currentDay)) {
        const bannerClosed = localStorage.getItem("bannerClosed");

        // Display the banner if it's not closed
        if (!bannerClosed) {
            document.getElementById("meetGreetBanner").style.display = "block";
        }
    }
}

// Function to fetch weather data from OpenWeatherMap API
const currentTemp = document.querySelector('#weather');

const lat = 49.75;
const lon = 6.63;
const apiKey = 'b824e6d324073d6895e2fa9bd1af574a';


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;



function fetchWeatherData() {
    // Declare variables
    const lat = 21.6477;
    const lon = -157.9253;
    const apiKey = 'b824e6d324073d6895e2fa9bd1af574a';

    // Define DOM elements
    const currentTemp = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weather-icon');
    const captionDesc = document.getElementById('weatherDescription');

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // testing only
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    function displayResults(data) {
        // Ensure these variables are declared, as they are not in your provided code snippet
        let tempNum, iconscr, description;

        // Update DOM elements with weather data
        tempNum = (data.main.temp).toFixed();
        currentTemp.innerHTML = `${tempNum} &deg;F`;


        description = data.weather[0].description.toString();
        captionDesc.textContent = description;
    }

    // Call the API fetch function
    apiFetch();
}

// Call the fetchWeatherData function on page load
window.onload = fetchWeatherData;