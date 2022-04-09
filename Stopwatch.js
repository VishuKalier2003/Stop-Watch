const clock = document.getElementById('stop-watch');
let min = 0, // variables initialized
    sec = 0,
    pause = false,
    millisec = 0;

// Selecting start button by I'd
const start = document.getElementById('btn-start');
// Selecting stop button by I'd
const stop_btn = document.getElementById('btn-stop');
// Selecting reset button by I'd'
const reset = document.getElementById('btn-reset');
// Event when start button is clicked
start.addEventListener('click', function() {
    pause = false;
    setTime();
    clock.style.color = '#2E99B6';
});

// Event when stop button is clicked
stop_btn.addEventListener('click', function() {
    pause = true; // pausing the setTime function
    setTime();
    clock.style.color = '#EE2E31';
});

// Event when reset button is clicked
reset.addEventListener('click', function() {
    min = 0;
    sec = 0;
    millisec = 0;
    pause = true; // pausing the setTime function
    setTime();
    clock.textContent = min + ":" + sec + ":" + Math.floor(millisec / 10);
    clock.style.color = '#23E4B6';
});

// function to set time
function setTime() {
    if (pause === false) { // Only operates when start button is pressed
        millisec = millisec + 10;
        if (millisec >= 999) {
            millisec = 0;
            sec++;
        }
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        // displaying text Content of the selected tag after modification
        clock.textContent = min + ":" + sec + ":" + Math.floor(millisec / 10);
        setTimeout(setTime, 10); // Calling the function after every 10 millisecond
    }
}