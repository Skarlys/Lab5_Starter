// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {

  const con = new JSConfetti();
  
  var image = document.getElementsByTagName('img')[0];
  var horn = document.getElementsById('horn-select');
  var range = document.getElementById('volume');
  
  var playSound = document.getElementByTagName('button')[0];
  var sound = document.getElementByTagName('audio')[0];

  volume.addEventListener('change', (event) => {
    if (range.value == 0){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-0.svg";
      sound.volume = 0;
    }
    else if (range.value > 0 && range.value<33){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-1.svg";
      sound.volume = 0;
    }
    else if (range.value >= 33 && range.value<67){
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-2.svg";
      sound.volume = 0;
    }
    else{
      document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-3.svg";
      sound.volume = 0;
    }
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
  } else if (selectedHorn.value == 'car-horn'){
    image.src = "./assets/images/car-horn.svg";
    sound.src = "./assets/audio/car-horn.mp3";
  }
  else {
    image.src = "./assets/images/party-horn.svg";
    sound.src = "./assets/audio/party-horn.mp3";
  }


  });


}
