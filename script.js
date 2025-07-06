const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const initialTotalSeconds = 4 * 60 * 60;

let totalSeconds = initialTotalSeconds;
let timerInterval;

// Функція для оновлення відображення таймера
function updateDisplay() {
  if (totalSeconds <= 0) {
    clearInterval(timerInterval);
    hoursSpan.textContent = '00';
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';
    return;
  }

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  hoursSpan.textContent = String(h).padStart(2, '0');
  minutesSpan.textContent = String(m).padStart(2, '0');
  secondsSpan.textContent = String(s).padStart(2, '0');

  totalSeconds--; // Зменшуємо лічильник після оновлення
}

// Функція для запуску таймера
function startTimer() {
  // Оновлюємо дисплей негайно, щоб не було затримки на 1 секунду перед першим оновленням
  updateDisplay();
  timerInterval = setInterval(updateDisplay, 1000); // Запускаємо інтервал
}

// Автоматичний запуск таймера при завантаженні сторінки
startTimer();