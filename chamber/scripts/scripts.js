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

function toggleNav() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#F8F2BE";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});


const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    document.querySelector(".sidebar").textContent = "Welcome! Let us know if you have any questions.";
} else {
    const currentTime = Date.now();
    const daysSinceLastVisit = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        document.querySelector(".sidebar").textContent = "Back so soon! Awesome!";
    } else {
        // More than a day
        const message = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? '' : 's'} ago.`;
        document.querySelector(".sidebar").textContent = message;
    }
}

// Save the current visit date in localStorage
localStorage.setItem("lastVisit", Date.now());

const joinButton = document.getElementById('joinBtn');
joinButton.addEventListener('click', function() {
    window.location.href = 'https://sheldonmedeiros.github.io/wdd230/chamber/join.html';
});