const buttunStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body')
buttunStart.addEventListener('click', startChangeColor);
buttonStop.addEventListener('click', stopChangeColor);

let pauseEl = null;
function startChangeColor(evt){
   pauseEl =  setInterval(() =>{
        bodyEl.style.backgroundColor = getRandomHexColor()
    },1000)  
    buttunStart.disabled = true;
    buttonStop.disabled = false;
}
function stopChangeColor(evt){
    clearInterval(pauseEl)
    buttunStart.disabled = false;
    buttonStop.disabled = true;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
console.dir(bodyEl)