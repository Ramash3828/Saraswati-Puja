let dayTimer = document.getElementById('day');
let hoursTimer = document.getElementById('hours');
let minTimer = document.getElementById('min');
let secTimer = document.getElementById('sec');

let countDownTimer = function() {
    let date = new Date();
    let SharassatiPuja = new Date("05 February 2022");
    let myDate = SharassatiPuja - date;
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hr = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayTimer.innerHTML = days;
    hoursTimer.innerHTML = hr;
    minTimer.innerHTML = min;
    secTimer.innerHTML = sec;

}

countDownTimer();

setInterval(countDownTimer, 1000);