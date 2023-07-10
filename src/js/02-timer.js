import flatpickr from "flatpickr";
// import styles from flatpickr //npm runnpm
import "flatpickr/dist/flatpickr.min.css";

//selectors // 
const inputEl = document.querySelector('#datetime-picker');
const mainDivEl = document.querySelector('.timer');
const valueEl = document.querySelectorAll('.field');
const buttonStart = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
//styles // 
mainDivEl.style.display = 'flex';
mainDivEl.style.gap = '15px';
valueEl.forEach(flexRowFunc);
function flexRowFunc(item){
    item.style.display = 'flex';
    item.style.flexDirection = 'column'
    item.style.alignItems = 'center'
    item.style.fontWeight = 'bold'
}

buttonStart.disabled = true;
const currentDate = new Date();
let userDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userDate = selectedDates[0] ;
      if(currentDate > userDate ){
        alert('Please choose a date in the future')
        return
      } 
      buttonStart.disabled = false;
    },
  };
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

  flatpickr(inputEl, options);
buttonStart.addEventListener('click', timeStartFunc);
function timeStartFunc(evt){
    
    const id = setInterval(()=>{  
    const current = new Date
    let differenceTime = convertMs(userDate - current)    
    if(differenceTime.seconds >= 0){
    console.log(differenceTime)
    timerDays.textContent = differenceTime.days.toString().padStart(2, "0")
    timerHours.textContent = differenceTime.hours.toString().padStart(2, "0")
    timerMinutes.textContent = differenceTime.minutes.toString().padStart(2, "0")
    timerSeconds.textContent = differenceTime.seconds.toString().padStart(2, "0");
} 
else{clearInterval(id)
alert("It's that time")
}
1000 }) }
