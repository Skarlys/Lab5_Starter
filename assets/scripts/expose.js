// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {

  
  let sound = document.getElementsByTagName('audio')[0];
  let range = document.getElementById('volume');
  let volImage = document.getElementsByTagName('img')[1];
  range.addEventListener('input', (event) => {
    if (range.value == 0){
      volImage.src = './assets/icons/volume-level-0.svg';
    }
    else if (range.value > 0 && range.value<33){
      volImage.src = './assets/icons/volume-level-1.svg';
    }
    else if (range.value >= 33 && range.value<67){
      volmage.src = './assets/icons/volume-level-2.svg';
    }
    else{
      volImage.src = './assets/icons/volume-level-3.svg';
    }
    sound.volume = volume.value * 0.01;

  });

  let horn = document.getElementById('horn-select');
  let playSound = document.getElementsByTagName('button')[0];
  const con = new JSConfetti();
  playSound.addEventListener('click', (event) => {
    if (horn.value == 'party-horn' && volume.value != 0){
      
      con.addConfetti({emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],});
    }
    sound.play();

  });

  let hornImage = document.getElementsByTagName('img')[0];

  horn.addEventListener('change', (event) => {
  if (horn.value == 'air-horn'){
    hornImage.src = './assets/images/air-horn.svg';
    sound.src = './assets/audio/air-horn.mp3';
  } else if (horn.value == 'car-horn'){
    hornImage.src = './assets/images/car-horn.svg';
    sound.src = './assets/audio/car-horn.mp3';
  }
  else if (horn.value == 'party-horn') {
    hornImage.src = './assets/images/party-horn.svg';
    sound.src = './assets/audio/party-horn.mp3';
  }


  });

}
