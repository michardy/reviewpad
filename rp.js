// based on:
// https://stackoverflow.com/questions/2963677/can-i-prevent-an-alert-with-a-google-chrome-extension

let inject = "delete window.alert;";

let disElem = document.createElement("script");
disElem.textContent = inject;

document.documentElement.appendChild(disElem);
disElem.parentNode.removeChild(disElem);