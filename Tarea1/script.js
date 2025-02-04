// Seleccionar elementos del DOM
const headerText = document.getElementById("header-text");
const btnDom = document.getElementById("btn-dom");
const btnWorld = document.getElementById("btn-world");
const btnBoth = document.getElementById("btn-both");

// Cambiar el texto a "Hello DOM!"
btnDom.addEventListener("click", () => {
    headerText.textContent = "Hello DOM!";
});

// Cambiar el texto a "Hello World!"
btnWorld.addEventListener("click", () => {
    headerText.textContent = "Hello World!";
});

// Cambiar el texto a "Hello World! Hello DOM!"
btnBoth.addEventListener("click", () => {
    headerText.textContent = "Hello World! Hello DOM!";
});