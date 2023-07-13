import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;


function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function reset() {
  updateDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0;

    updateDisplay(minutes, 0);

    if (isFinished) {
      Sounds().timeEnd();
      resetControls();
      updateDisplay();
      return;
    }

    if (seconds <= 0) {
      seconds = 3;
      --minutes;
    }

    updateDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function hold() {
  clearTimeout(timerTimeOut);
}

function plus(){
  minutes += 5; // Incrementa os minutos
  updateDisplay(minutes, 0); // Atualiza a exibição
}

function minus(){
  if (minutes >=5) {
    minutes-=5; // Decrementa os minutos apenas se for maior que zero
    updateDisplay(minutes, 0); // Atualiza a exibição
  }
}

  return {
    updateDisplay,
    reset,
    countdown,
    hold,
    plus,
    minus,
  }
}