const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
startBtn.addEventListener('click', onStartColorChangeBtnClick);
stopBtn.addEventListener('click', onStopColorChangeBtnClick);
// stopBtn.setAttribute('disabled', '');
updateBtnDisabled(stopBtn, true);

function onStartColorChangeBtnClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  updateBtnDisabled(startBtn, true);
  updateBtnDisabled(stopBtn, false);
  // stopBtn.removeAttribute('disabled');
}

function onStopColorChangeBtnClick() {
  clearInterval(intervalId);
  // document.body.removeAttribute('style');
  updateBtnDisabled(startBtn, false);
  updateBtnDisabled(stopBtn, true);
  // startBtn.removeAttribute('disabled');
  // stopBtn.setAttribute('disabled', '');
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function updateBtnDisabled(btn, state) {
  btn.disabled = state;
}
