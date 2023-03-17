

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dayEl = document.querySelector(".day");

const audio = new Audio("clock-tick2.mp3");

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function updateClock() {
    const currentDate = new Date();

    setTimeout(updateClock, 1000);

    audio.play();
    audio.volume = 0.08;

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    console.log({hour, minute, second});

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`

    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`

   dayEl.innerHTML = days[currentDate.getDay()];
}


updateClock();