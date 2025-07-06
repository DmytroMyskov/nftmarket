function createAutoTimer(prefix, initialSeconds) {
  const hoursSpan = document.querySelector(`[data-id="${prefix}-hours"]`);
  const minutesSpan = document.querySelector(`[data-id="${prefix}-minutes"]`);
  const secondsSpan = document.querySelector(`[data-id="${prefix}-seconds"]`);

  let totalSeconds = initialSeconds;
  let timerInterval;

  function updateDisplay() {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      hoursSpan.textContent = '00';
      minutesSpan.textContent = '00';
      secondsSpan.textContent = '00';
    }

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursSpan.textContent = String(h).padStart(2, '0');
    minutesSpan.textContent = String(m).padStart(2, '0');
    secondsSpan.textContent = String(s).padStart(2, '0');

    totalSeconds--;
  }

  function startTimer() {
    updateDisplay();
    if (totalSeconds > 0) {
      timerInterval = setInterval(updateDisplay, 1000);
    } else {
      updateDisplay();
    }
  }

  startTimer();

}

createAutoTimer('main', 4 * 60 * 60);
createAutoTimer('timer1', 6 * 55 * 60);
createAutoTimer('timer2', 6 * 55 * 60);
createAutoTimer('timer3', 6 * 55 * 60);


function createCounter(counterElement, initialValue) {
  const counterValueSpan = counterElement.querySelector('[data-counter-value]');
  const incrementBtn = counterElement.querySelector('[data-action="increment"]');
  const decrementBtn = counterElement.querySelector('[data-action="decrement"]');

  let counter = initialValue;

  function updateDisplay() {
    counterValueSpan.textContent = counter;
  }

  incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
  });

  decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
  });

  updateDisplay();
}

const allCounterCards = document.querySelectorAll('.counter-card');

allCounterCards.forEach(card => {
  const counterId = card.dataset.counterId;

  let initialVal;

  switch (counterId) {
    case 'counter1':
      initialVal = 490;
      break;
    case 'counter2':
      initialVal = 490;
      break;
    case 'counter3':
      initialVal = 490;
      break;
    default:
      initialVal = 0;
  }
  createCounter(card, initialVal);
});