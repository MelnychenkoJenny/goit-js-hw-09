const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
startBtn.addEventListener('click', onStartColorChangeBtnClick);
stopBtn.addEventListener('click', onStopColorChangeBtnClick);

function onStartColorChangeBtnClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  startBtn.setAttribute('disabled', '');
}

function onStopColorChangeBtnClick() {
  clearInterval(intervalId);
  document.body.removeAttribute('style');
  startBtn.removeAttribute('disabled');
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
