const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name=delay]');
const stepEl = document.querySelector('input[name=step]');
const amountEl = document.querySelector('input[name=amount]');


function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

console.log(createPromise())

function submitFunc(evt){  
  evt.preventDefault()
let step = Number(stepEl.value);
let delay = Number(delayEl.value);
let amount = Number(amountEl.value);
let position;
 for(position = 1; position <= amount; position++){
  const delays = delay + position * step ;
  createPromise(position, delays)
  .then(({ position, delays }) => {
    setTimeout(() => {
    console.log(`✅ Fulfilled promise ${position} in ${deleys}ms`); }, delays);
  })
  .catch(({ position, delays }) => {
    setTimeout(() => {
    console.log(`❌ Rejected promise ${position} in ${delays}ms`); }, delays);
  });
} 
}

formEl.addEventListener('submit', submitFunc)
