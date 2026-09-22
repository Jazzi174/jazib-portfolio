
// Portfolio website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Jazib Khan portfolio loaded successfully.");

    // Highlight the current year automatically
    const footer = document.querySelector("footer p");

    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML =
            "© " + year + " Muhammad Jazib Khan";
    }

});
