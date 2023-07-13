import {
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume,
} from "./elements.js";

export default function ({ controls, timer, sound }) {

  buttonLight.addEventListener("click", function () {
    controls.modoDark()
    sound.pressButton();
  })

  buttonDark.addEventListener("click",function(){
    controls.modoLight()
    sound.pressButton();
  })

  
  buttonPlay.addEventListener("click", function () {
    controls.play()
    timer.countdown();
    sound.pressButton();
  })

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  })  

  buttonStop.addEventListener("click", function () {
    controls.stop();
    timer.reset();
    sound.pressButton();
  })

  buttonPlus.addEventListener("click", function () {
    timer.plus();
    sound.pressButton();
  })

  buttonMinus.addEventListener("click", function () {
    timer.minus()
    sound.pressButton();
  })

  buttonSoundForest.addEventListener("click", function () {
    controls.soundForest();
    sound.playSoundForest();
    sound.pressButton();
    sound.resetForestVolume();
  })

  buttonSoundRain.addEventListener("click", function () {
    controls.soundRain();
    sound.playSoundRain();
    sound.pressButton();
    sound.resetRainVolume();
  })

  buttonSoundCoffeeShop.addEventListener("click", function () {
    controls.soundCoffeeShop();
    sound.playSoundCoffeeShop();
    sound.pressButton();
    sound.resetCoffeeShopVolume();
  })

  buttonSoundFireplace.addEventListener("click", function () {
    controls.soundFireplace();
    sound.playSoundFireplace();
    sound.pressButton();
    sound.resetFireplaceVolume();
  })

  inputForestVolume.addEventListener('input', sound.setAudioVolume)
  inputRainVolume.addEventListener('input', sound.setAudioVolume)
  inputCoffeeShopVolume.addEventListener('input', sound.setAudioVolume)
  inputFireplaceVolume.addEventListener('input', sound.setAudioVolume)
}
