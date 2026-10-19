// Selección de elementos
const body = document.body;
const mainButton = document.getElementById("main-button");
const languageSelect = document.getElementById("language-select");

// Variable para saber si está en modo oscuro
let dark = false;

// Función para cambiar de modo
function changeMode() {

    if (dark === false) {
        body.style.backgroundColor = "black";
        body.style.color = "white";

        dark = true;
    }
    else {
        body.style.backgroundColor = "rgb(86, 169, 45)";
        body.style.color = "black";

        dark = false;
    }
}

// Evento click
mainButton.addEventListener("click", changeMode);

let language = localStorage.getItem("language") === "en" ? "en" : "es";

function updateLanguage() {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-es][data-en]").forEach((element) => {
        element.textContent = element.dataset[language];
    });

    document.querySelectorAll("[data-placeholder-es][data-placeholder-en]").forEach((element) => {
        element.placeholder = element.dataset[`placeholder${language === "es" ? "Es" : "En"}`];
    });
}

languageSelect.value = language;
languageSelect.addEventListener("change", () => {
    language = languageSelect.value;
    localStorage.setItem("language", language);
    updateLanguage();
});
updateLanguage();
