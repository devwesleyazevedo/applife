///////////////////////////////////////////////////////////////////////////////////
// Timer para reenviar código ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function startTimer(duration) {
    document.getElementById('resend-cod').style.opacity = "0.2";
    document.getElementById("resend-cod").disabled = true;
    var timer = duration;
    var seconds = 0;
    refreshIntervalId = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.querySelector('#timer').textContent = seconds + "s";
        if (--timer < 0) {
            timer = duration;
        }
        if(seconds == 0){
            clearInterval(refreshIntervalId);
            document.querySelector('#timer').textContent = "";
            document.getElementById('resend-cod').style.opacity = "1";
            document.getElementById("resend-cod").disabled = false;
        }

    }, 1000);
}
window.onload = function () {
    var duration = 59; // Converter para segundos     
    startTimer(duration); // iniciando o timer
};