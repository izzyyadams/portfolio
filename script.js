var userPopup = document.getElementById("userPopup");
var arcadePopup = document.getElementById("arcadePopup");
var designPopup = document.getElementById("designPopup");
var devPopup = document.getElementById("devPopup");

var userButton = document.getElementById("userButton");
var arcadeButton = document.getElementById("arcadeButton");
var designButton = document.getElementById("designButton");
var devButton = document.getElementById("devButton");

userButton.ondblclick = function() {
    userPopup.style.display = "block";
}

arcadeButton.ondblclick = function () {
    arcadePopup.style.display = "block";
}

designButton.ondblclick = function () {
    designPopup.style.display = "block";
}

devButton.ondblclick = function () {
    devPopup.style.display = "block";
}