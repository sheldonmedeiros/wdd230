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
