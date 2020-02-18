
// Timer reverse
function timeRem (et) {

    let t = Date.parse(et) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        total: t,
        days: days
    }
}
function initClock (et) {
    let timer   = document.querySelectorAll(".timer-reverse");

    if (timer) {
        timer.forEach((tm) => {
            let elDays = tm.querySelector("#days");            

            function updateClock() {
                let tr = timeRem(et);
            
                elDays.innerHTML = tr.days;
            
                if (tr.total <= 0) { 
                  clearInterval(timeinterval);                  
                }
              }
              updateClock();
            //   Обновляем каждые сутки (1 день = 86400 секунд)
              let timeinterval = setInterval(updateClock, 86400);
        })        
    }
}
let deadline = "February 29 2020 00:00:00 GMT+0400";

initClock(deadline);


