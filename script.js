

let timers = {};

const alertSound = new Audio('alert.mp3'); // Make sure to have an 'alert.mp3' file in your project directory

function navigateTo(screenId) {
    document.querySelectorAll('.screen, #landing-page').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}


function startStopTimer(timerId) {
  if (!timers[timerId]) {
      timers[timerId] = { interval: null, seconds: 0 };
  }
  if (timers[timerId].interval) {
      clearInterval(timers[timerId].interval);
      timers[timerId].interval = null;
  } else {
      timers[timerId].interval = setInterval(() => {
          timers[timerId].seconds++;
          document.getElementById(timerId).textContent = timers[timerId].seconds;
          if (timers[timerId].seconds === 30) {
              alertSound.play();
          }
      }, 1000);
  }
}

function resetAllTimers() {
  Object.keys(timers).forEach(timerId => {
      clearInterval(timers[timerId].interval);
      timers[timerId].interval = null;
      timers[timerId].seconds = 0;
      document.getElementById(timerId).textContent = '0';
  });
}