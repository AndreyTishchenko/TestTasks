const newYear = new Date(Date.UTC(2025, 0, 1, 0, 0, 0)).getTime();

// Функция для обновления таймера
function updateCountdown() {
    const daysEl = document.querySelector('.days .timer-value');
    const hoursEl = document.querySelector('.hours .timer-value');
    const minutesEl = document.querySelector('.minutes .timer-value');
    const secondsEl = document.querySelector('.seconds .timer-value');
    
    const now = new Date();

    const nowUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
    const timeLeft = newYear - nowUTC;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Выводим таймер
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    // Если время истекло, показываем сообщение
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "С Новым Годом!";
    }
}

// Обновляем таймер каждую секунду
const timer = setInterval(updateCountdown, 1000);
