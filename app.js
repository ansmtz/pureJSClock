const dom = {
    hours: document.querySelector('.clock-hours'),
    minutes: document.querySelector('.clock-minutes'),
    day: document.querySelector('.clock-date-info'),
    dots: document.querySelectorAll('.clock-dot'),
    themeCheckbox: document.querySelector('.checkbox')
};

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

const showDay = (day, date, month) => {
    return `${days[day]}, ${date} ${months[month]}`
}

const getCurrentDate = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getDay(),
        date: date.getDate(),
        month: date.getMonth()
    }
}

const drawCurrentDate = ({ hours, minutes, seconds, day, date, month }) => {
    if(seconds === 59){
        dom.dots.forEach(dot => dot.classList.toggle('flip'));
    }
    dom.hours.innerText = hours.toString().padStart(2, "0");
    dom.minutes.innerText = minutes.toString().padStart(2, "0");
    dom.day.children[0].innerText = showDay(day, date, month);
}

window.addEventListener('load', () => {
    drawCurrentDate(getCurrentDate());
});

setInterval(() => {
    drawCurrentDate(getCurrentDate());
}, 1000)

dom.themeCheckbox.addEventListener("change", (e)=> {
    if (e.target.checked){
        document.body.classList.add('night-theme');
    } else {
        document.body.classList.remove('night-theme');
    }
})