/*MODO BUTTONS DARK ATIVAR E DESATIVAR*/
const buttonLight = document.querySelector(".light-theme");
const buttonDark = document.querySelector(".dark-theme");
const dark = document.querySelector(".dark");

buttonLight.addEventListener("click", function () {
  buttonLight.classList.add("hide");
  buttonDark.classList.remove("hide");
  document.body.classList.add("dark")
});

buttonDark.addEventListener("click",function(){
  buttonDark.classList.add("hide")
  buttonLight.classList.remove("hide")
  document.body.classList.remove("dark");
});


/*MODO BUTTONS PLAY PAUSE E STOP + -*/
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");

const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

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
      updateDisplay();
      Sounds().timeEnd();
      return;
    }
    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function hold() {
  clearTimeout(timerTimeOut);
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  hold();
});

buttonStop.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  reset();
});

buttonPlus.addEventListener("click", function () {
  minutes++; // Incrementa os minutos
  updateDisplay(minutes, 0); // Atualiza a exibição
});

buttonMinus.addEventListener("click", function () {
  if (minutes > 0) {
    minutes--; // Decrementa os minutos apenas se for maior que zero
    updateDisplay(minutes, 0); // Atualiza a exibição
  }
});







/*MODO BUTTONS SOUND*/







