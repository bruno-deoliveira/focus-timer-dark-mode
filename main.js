const buttonSoundForest = document.querySelector(".card-forest");
const buttonSoundRain = document.querySelector(".card-rain");
const buttonSoundCoffeeShop = document.querySelector(".card-coffee-shop");
const buttonSoundFireplace = document.querySelector(".card-fireplace");

const buttonPressAudio = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
);
const kitchenTimer = new Audio("./sound/audios_kichen-timer.mp3");
const bgAudioForest = new Audio("./sound/Floresta.wav");
const bgAudioRain = new Audio("./sound/Chuva.wav");
const bgAudioCoffeeShop = new Audio("./sound/Cafeteria.wav");
const bgAudioFireplace = new Audio("./sound/Lareira.wav");


buttonSoundForest.addEventListener("click", function () {
  buttonSoundForest.classList.toggle("active")
  playSoundForest();
});

buttonSoundRain.addEventListener("click", function () {
  playSoundRain();
  buttonSoundRain.classList.toggle("active")
});

buttonSoundCoffeeShop.addEventListener("click", function () {
  playSoundCoffeeShop();
  buttonSoundCoffeeShop.classList.contains("active")
    ? buttonSoundCoffeeShop.classList.remove("active")
    : buttonSoundCoffeeShop.classList.add("active");
});

buttonSoundFireplace.addEventListener("click", function () {
  playSoundFireplace();
  buttonSoundFireplace.classList.contains("active")
    ? buttonSoundFireplace.classList.remove("active")
    : buttonSoundFireplace.classList.add("active");
});

function playSoundForest() {
  if (buttonSoundForest.classList.contains("active")) {
    // Reproduzir o som da floresta
    bgAudioForest.play();
  } else {
    // Parar o som da floresta
    bgAudioForest.pause();
    bgAudioForest.currentTime = 0;
  }
}

function playSoundRain() {
  if (buttonSoundRain.classList.contains("active")) {
    // Reproduzir o som da floresta
    bgAudioRain.play();
  } else {
    // Parar o som da floresta
    bgAudioRain.pause();
    bgAudioRain.currentTime = 0;
  }
  
}

function playSoundCoffeeShop() {
  buttonSoundCoffeeShop.classList.contains("active")
    ? bgAudioCoffeeShop.pause()
    : bgAudioCoffeeShop.play();
}

function playSoundFireplace() {
    buttonSoundFireplace.classList.contains("active")
      ? bgAudioFireplace.pause()
      : bgAudioFireplace.play();
}

function pressButton() {
  buttonPressAudio.play();
}

function timeEnd() {
  kitchenTimer.play();
}



bgAudioForest.loop = true;
bgAudioRain.loop = true;
bgAudioCoffeeShop.loop = true;
bgAudioFireplace.loop = true;