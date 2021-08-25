let dt = new Date(new Date().setTime(0));//Initially set time as 00:00
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000); //Convert into seconds
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60)); // Convert into minutes
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;

        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;//TO show in 00:04 format when it is less than 10 seconds
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);
