const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
startBtn.addEventListener('click', onBackgroundColorChangeBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onBackgroundColorChangeBtnClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  startBtn.setAttribute('disabled', '')
}

function onStopBtnClick() {
    clearInterval(intervalId);
    document.body.removeAttribute('style');
    startBtn.removeAttribute('disabled')
}


function changeBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
