// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var voiceSelect = document.getElementById('voice-select');
  var select = document.querySelector('select');
  for(var i = 0; i < voices.length ; i++) {

    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    voiceSelect.appendChild(option);
  }

  let voice_chosen;
  select.addEventListener("change", (event) =>{

  })
}