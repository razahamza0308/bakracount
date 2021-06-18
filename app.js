var date = new Date();
var year = date.getFullYear();
var countDownDate = new Date("7/21/2021");


var countdownfunction = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // var miliseconds = Math.floor((distance % (1000 * 60)));
    console.log(minutes);

    document.getElementById("countdownDays").innerHTML = days;
    document.getElementById("countdownHours").innerHTML = hours;
    document.getElementById("countdownMinutes").innerHTML = minutes;
    document.getElementById("countdownSeconds").innerHTML = seconds;
    // document.getElementById("countdownMilliSeconds").innerHTML = miliseconds;

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdownDays").innerHTML = 0;
        document.getElementById("countdownHours").innerHTML = 0;
        document.getElementById("countdownMinutes").innerHTML = 0;
        document.getElementById("countdownSeconds").innerHTML = 0;
    }
}, 1000);
