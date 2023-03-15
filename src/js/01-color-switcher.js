const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
startBtn.addEventListener('click', onStartColorChangeBtnClick);
stopBtn.addEventListener('click', onStopColorChangeBtnClick);
// stopBtn.setAttribute('disabled', '');
stopBtn.disabled = true;

function onStartColorChangeBtnClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  // stopBtn.removeAttribute('disabled');
}

function onStopColorChangeBtnClick() {
  clearInterval(intervalId);
  // document.body.removeAttribute('style'); 
  startBtn.disabled = false;
  stopBtn.disabled = true;
  // startBtn.removeAttribute('disabled');
  // stopBtn.setAttribute('disabled', '');
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
