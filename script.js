const days = document.querySelectorAll('#days');
const hours = document.querySelectorAll('#hours');
const minutes = document.querySelectorAll('#minutes');
const seconds = document.querySelectorAll('#seconds');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(` Jan 1 ${currentYear + 1} 00:00:00`);
// Функия рассчета времени
function update() {
    // добавление нынешнего времени
    const currentTime = new Date();
    // разница времени в сек и мсек
    const diff = newYearTime - currentTime ;
    // калькуляция времени
    // расчет дней
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    // расчет часов
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    // расчет минут
    const m = Math.floor(diff / 1000 / 60) % 60;
    // расчет секунд
    const s = Math.floor(diff / 1000) % 60;
    /* добавление часов в Html */
    this.days.innerHTML = d;
    this.hours.innerHTML = h < 10 ? '0' + h : h;
    this.minutes.innerHTML = m < 10 ? '0' + m : m;
    this.seconds.innerHTML = s < 10 ? '0' + s : s;
 
}
//Обновление таймера каждую секунду

setInterval(update, 1000);