import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
require('flatpickr/dist/themes/material_blue.css');
import Notiflix from 'notiflix';


const flatpickerInput = document.querySelector('#datetime-picker');
const clockValueDay = document.querySelector('span[data-days]');
const clockValueHour = document.querySelector('span[data-hours]');
const clockValueMinute = document.querySelector('span[data-minutes]');
const clockValueSecond = document.querySelector('span[data-seconds]');
const startTimerBtn = document.querySelector('button[data-start]')


startTimerBtn.disabled = true;

let endTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    endTime = selectedDates.getTime();
    if(endTime < Date.now()){
        Notiflix.Notify.failure('Please choose a date in the future. Have a great day =)');
    }
    Notiflix.Notify.success('The correct date is selected. Rather click the button START to start the timer');
    startTimerBtn.disabled = false;
  },
  
};

flatpickr(flatpickerInput, options);

const timer = {
    intervalId: null,
    isActive: false,
  start() {
    if(this.isActive) {
        return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      const time = convertMs(deltaTime);
      updateTimer(time);
      if(deltaTime<1000) {
        Notiflix.Report.success('Time achieved', '', 'Ok');
        this.stop()
      }
      
    }, 1000);
    startTimerBtn.disabled = true;
    flatpickerInput.disabled = true;

  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    startTimerBtn.disabled = true;
    flatpickerInput.disabled = false;
    
  }
 };

 startTimerBtn.addEventListener('click', timer.start.bind(timer));
function updateTimer({days, hours, minutes, seconds}) {
    clockValueDay.textContent = days;
    clockValueHour.textContent = hours;
clockValueMinute.textContent = minutes;
clockValueSecond.textContent = seconds;


}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


