// explore.js

window.addEventListener('DOMContentLoaded', init);

  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById('voice-select');
  let select = document.querySelector('select');
  //let selectedOption;
  

function init() {
  if (synth.onvoiceschanged !== undefined){
    populateVoiceList();
  }

  let play = document.getElementsByTagName('button')[0];
  let text = document.getElementById('text-to-speak');


  play.addEventListener('click', (event) => {

  var utterThis = new SpeechSynthesisUtterance(text.value);
  let face = document.getElementsByTagName('img')[0];
  face.src = './assets/images/smiling-open.png';
  utterThis.onend = function() {face.src = './assets/images/smiling.png'};


  // from: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  let voices = synth.getVoices();
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);

  });

}

// from: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
function populateVoiceList(){

  synth.addEventListener('voiceschanged', (event)=>{
    let voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
});

}

