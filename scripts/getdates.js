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

