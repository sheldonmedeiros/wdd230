function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}

const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChill");

const temperature = parseFloat(temperatureElement.innerText);
const windSpeed = parseFloat(windSpeedElement.innerText);

const windChillValue = calculateWindChill(temperature, windSpeed);

windChillElement.innerText = `Wind Chill: ${windChillValue}°F`;

document.getElementById("windChill").innerText = `Wind Chill: ${windChillValue}°F`;