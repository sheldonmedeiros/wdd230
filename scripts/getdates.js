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

const password = document.querySelector("#keyphrase");
const confirm_password = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

confirm_password.addEventListener("focusout", checkSame);


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