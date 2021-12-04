let timer =(document).getElementById("tgCountupTimer");

let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let msecNumber = 0;
let secNumber = 0;
let minNumber = 0;
let hourNumber = 0;

$(document).ready(function(){
 
    $('#tgCountupTimer #startButton').click(function() {
        
        $('#tgCountupTimer .time');
 
        timer = setInterval("countUp()", 100);
 
        $(this).prop('disabled',true);
        $('#tgCountupTimer #stopButton').prop('disabled',false);
        $('#tgCountupTimer #clearButton').prop('disabled',true);
    });
 
    $('#tgCountupTimer #stopButton').click(function() {
        
        clearInterval(timer);
 
        $(this).prop('disabled',true);
        $('#tgCountupTimer #startButton').prop('disabled',false);
        $('#tgCountupTimer #clearButton').prop('disabled',false);
    });
 
    $('#tgCountupTimer #clearButton').click(function() {
 
        msec = 0;
        sec = 0;
        min = 0;
        hour = 0;

        $('#tgCountupTimer .time').html('00:00:00:0');

        clearInterval(timer);
 
        $(this).prop('disabled',true);
        $('#tgCountupTimer #stopButton').prop('disabled',true);
        $('#tgCountupTimer #startButton').prop('disabled',false);
    });
});
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    msecNumber = msec;
 
    if (sec < 10) {
        secNumber = '0' + sec.toString();
    } else {
        secNumber = sec;
    }

    if (min < 10) {
        minNumber = '0' + min.toString();
    } else {
        minNumber = min;
    }
 
    if (hour < 10) {
        hourNumber = '0' + hour.toString();
    } else {
        hourNumber = hour;
    }
 
    $('#tgCountupTimer .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}
