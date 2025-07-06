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