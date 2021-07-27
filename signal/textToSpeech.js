// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "fr";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[38];
};

  speech.rate = .5;

  speech.volume = 1;

  speech.pitch = .5;

  speech.voice = voices[38];

document.querySelector("#start").addEventListener("click", () => {
  // Set the text property with the value of the textarea
  speech.text = document.querySelector("textarea").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});
