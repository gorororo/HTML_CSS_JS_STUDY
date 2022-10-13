const tagClock = document.querySelector('.timetable');

const clock_init = ()=>{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    tagClock.textContent = `${hours}:${minutes}:${seconds}`}


clock_init();
setInterval(clock_init,1000);