// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {

  const con = new JSConfetti();
  
  var image = document.getElementsByTagName('img')[0];
  var horn = document.getElementById('horn-select');
  var range = document.getElementById('volume');
  var playSound = document.getElementsByTagName('button')[0];
  var sound = document.getElementsByTagName('audio')[0];

  
  range.addEventListener('input', (event) => {
    if (range.value == 0){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-0.svg";
    }
    else if (range.value > 0 && range.value<33){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-1.svg";
    }
    else if (range.value >= 33 && range.value<67){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-2.svg";
    }
    else{
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-3.svg";
    }
    sound.volume = volume.value * 0.01;

  });

  playSound.addEventListener('click', (event) => {
    if (horn.value == 'party-horn'){
      con.addConfetti({emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],});
    }
    sound.play();

  });

  horn.addEventListener('change', (event) => {
  if (horn.value == 'air-horn'){
    image.src = "./assets/images/air-horn.svg";
    sound.src = "./assets/audio/air-horn.mp3";
  } else if (horn.value == 'car-horn'){
    image.src = "./assets/images/car-horn.svg";
    sound.src = "./assets/audio/car-horn.mp3";
  }
  else if (horn.value == 'party-horn') {
    image.src = "./assets/images/party-horn.svg";
    sound.src = "./assets/audio/party-horn.mp3";
  }


  });

}
