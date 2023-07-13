export default function Controls({
  buttonLight,
  buttonDark,
  dark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
}) {
  function modoDark(){
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");
    document.body.classList.add("dark");
  }

  function modoLight(){
    buttonDark.classList.add("hide");
    buttonLight.classList.remove("hide");
    document.body.classList.remove("dark");
  }

  function play(){
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function stop(){
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  
  function soundForest () {
    buttonSoundForest.classList.toggle("active");
}

  function soundRain () {
    buttonSoundRain.classList.toggle("active");
}

  function soundCoffeeShop () {
    buttonSoundCoffeeShop.classList.contains("active")
      ? buttonSoundCoffeeShop.classList.remove("active")
      : buttonSoundCoffeeShop.classList.add("active");
  }

  function soundFireplace() {
  buttonSoundFireplace.classList.contains("active")
    ? buttonSoundFireplace.classList.remove("active")
    : buttonSoundFireplace.classList.add("active");
}

  return {
        modoDark,
        modoLight,
        play,
        pause,
        stop,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace
    }
}
