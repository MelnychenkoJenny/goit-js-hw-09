import Notiflix from 'notiflix';

const form = document.querySelector(".form")

form.addEventListener('submit', onMakePromisesClick)


function onMakePromisesClick(evt) {
  evt.preventDefault();
  const {delay, step, amount} = evt.target;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  makePromises(delayValue, stepValue, amountValue);
  evt.currentTarget.reset();

}


function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if(shouldResolve){
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

function makePromises(delay, step, amount) {
  for(let position=1; position<=amount; position+=1) {
      createPromise(position, delay).then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay+=step;
  }
}