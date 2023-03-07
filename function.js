var backgroundColor = "rgb(31, 34, 56)";
var textColor = "antiquewhite";
var buttonColor = "rgb(189, 209, 226)";
var cursor = "normal"
var backgroundColorTheatre = "rgb(3, 4, 12)";
var textColorTheatre = "rgb(73, 66, 56)";
var buttonColorTheatre = "rgb(10, 15, 19)";
var cursorTheatre = "none"

function theatreMode() {
    document.documentElement.style.setProperty("--background-color", backgroundColorTheatre)
    document.documentElement.style.setProperty("--text-color", textColorTheatre)
    document.documentElement.style.setProperty("--button-color", buttonColorTheatre)
    document.documentElement.style.setProperty("--button-text-color", buttonTextColorTheatre)
    document.documentElement.style.setProperty("--cursor", cursorTheatre)
}
function normalMode() {
    document.documentElement.style.setProperty("--background-color", backgroundColor)
    document.documentElement.style.setProperty("--text-color", textColor)
    document.documentElement.style.setProperty("--button-color", buttonColor)
    document.documentElement.style.setProperty("--button-text-color", buttonTextColor)
    document.documentElement.style.setProperty("--cursor", cursor)
}

let timerId;

function runFunction1() {
  theatreMode()
  // Code to run when the user is inactive
}

function runFunction2() {
  normalMode()
  // Code to run when the user is active
}

function resetTimer() {
  clearTimeout(timerId);
  timerId = setTimeout(runFunction1, 5000);
}

let isUserActive = true;
let hasUserBeenInactive = false;

document.addEventListener("mousemove", function() {
  if (!isUserActive) {
    isUserActive = true;
    hasUserBeenInactive = true;
    runFunction2();
  }
  resetTimer();
});

setInterval(function() {
  if (!isUserActive && hasUserBeenInactive) {
    hasUserBeenInactive = false;
    runFunction1();
  }
  isUserActive = false;
}, 5000);