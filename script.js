const daysEl =document.querySelector('#days')
const hoursEl =document.querySelector('#hours')
const minsEl =document.querySelector('#mins')
const secondsEl =document.querySelector('#seconds')



const vacations = '10 nov 2023';

function countdown() {
    const vacationsDate = new Date(vacations)
    const currentDate = new Date();
   
    const totalSeconds = (vacationsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;


    console.log(days, hours, mins, seconds);
}


// initial call
countdown();

setInterval(countdown, 1000);