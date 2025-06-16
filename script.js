var mouseX;
var mouseY;
var zCount = 1;
var userPopup = document.getElementById("userPopup");
var arcadePopup = document.getElementById("arcadePopup");
var designPopup = document.getElementById("designPopup");
var devPopup = document.getElementById("devPopup");

var userButton = document.getElementById("userButton");
var arcadeButton = document.getElementById("arcadeButton");
var designButton = document.getElementById("designButton");
var devButton = document.getElementById("devButton");

var userClose = document.getElementById("userClose");
var arcadeClose = document.getElementById("arcadeClose");
var designClose = document.getElementById("designClose");
var devClose = document.getElementById("devClose");

userButton.ondblclick = function() {
    userPopup.style.display = "flex";
    zCount += 1;
    userPopup.style.zIndex = zCount;
}
userClose.onclick = function () {
    userPopup.style.display = "none";
}

arcadeButton.ondblclick = function () {
    arcadePopup.style.display = "flex";
    zCount += 1;
    userPopup.style.zIndex = zCount;
}
arcadeClose.onclick = function () {
    arcadePopup.style.display = "none";
}

designButton.ondblclick = function () {
    designPopup.style.display = "flex";
    zCount += 1;
    userPopup.style.zIndex = zCount;
}
designClose.onclick = function () {
    designPopup.style.display = "none";
}

devButton.ondblclick = function () {
    devPopup.style.display = "flex";
    zCount += 1;
    userPopup.style.zIndex = zCount;
}
devClose.onclick = function () {
    devPopup.style.display = "none";
}


const iconBars = document.querySelectorAll(".iconBar");

iconBars.forEach((item) => {
    let dragging = false;
    let mouseOnBarX;
    let mouseOnBarY;
    item.onmousedown = function(event) {
        
        const win = item.parentElement;
        zCount += 1;
        win.style.zIndex = zCount;
        mouseOnBarX = event.clientX - win.offsetLeft;
        mouseOnBarY = event.clientY - win.offsetTop;
        dragging = true;

        document.onmousemove = function(event) {
            if (!dragging) {
                return;
            }
            const newX = event.clientX - mouseOnBarX;
            const newY = event.clientY - mouseOnBarY;

            win.style.top = newY + "px";
            win.style.left = newX + "px";

        };

        document.onmouseup = function () {
            dragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };

    };
});

