import {
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume,
} from "./elements.js";

export default function (){
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio("./sound/audios_kichen-timer.mp3");
  const bgAudioForest = new Audio("./sound/Floresta.wav");
  const bgAudioRain = new Audio("./sound/Chuva.wav");
  const bgAudioCoffeeShop = new Audio("./sound/Cafeteria.wav");
  const bgAudioFireplace = new Audio("./sound/Lareira.wav");

  bgAudioForest.loop = true;
  bgAudioRain.loop = true;
  bgAudioCoffeeShop.loop = true;
  bgAudioFireplace.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

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
      ? bgAudioCoffeeShop.play()
      : bgAudioCoffeeShop.pause();
  }

  function playSoundFireplace() {
    buttonSoundFireplace.classList.contains("active")
      ? bgAudioFireplace.play()
      : bgAudioFireplace.pause();
  }

  function setAudioVolume() {
    bgAudioForest.volume = inputForestVolume.value;
    bgAudioRain.volume = inputRainVolume.value;
    bgAudioCoffeeShop.volume = inputCoffeeShopVolume.value;
    bgAudioFireplace.volume = inputFireplaceVolume.value;
  }

  function resetForestVolume() {
    inputForestVolume.value = 0.5;
  }

  function resetRainVolume() {
    inputRainVolume.value = 0.5;
  }

  function resetCoffeeShopVolume() {
    inputCoffeeShopVolume.value = 0.5;
  }

  function resetFireplaceVolume() {
    inputFireplaceVolume.value = 0.5;
  }

  return {
    pressButton,
    timeEnd,
    playSoundForest,
    playSoundRain,
    playSoundCoffeeShop,
    playSoundFireplace,
    setAudioVolume,
    resetForestVolume,
    resetRainVolume,
    resetCoffeeShopVolume,
    resetFireplaceVolume,
  };
  }