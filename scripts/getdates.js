function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

function updateFooter() {
    const copyrightYearElement = document.getElementById("copyrightYear");
    const lastModifiedElement = document.getElementById("lastModified");

    if (copyrightYearElement) {
        copyrightYearElement.textContent = getCurrentYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = formatLastModifiedDate();
    }
}

document.getElementById("currentyear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    mobileMenuToggle.addEventListener('click', () => {
        navigation.classList.toggle('navigation');
        mobileMenuToggle.classList.toggle('active');
    });
});

const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


function checkPasswordMatch() {
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    
    if (password !== passwordConfirm) {
        alert("Passwords do not match. Please try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password-confirm").value = "";
    }
}

function updateRatingValue() {
    const ratingValue = document.getElementById("page-rating").value;
    document.getElementById("rating-value").textContent = ratingValue;
}

//Weather for my homepage.
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 21.64;
const lon = -157.93;
const apiKey = 'b824e6d324073d6895e2fa9bd1af574a';


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        console.log('hello')
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

    captionDesc.textContent = data.weather[0].description;

}

apiFetch();