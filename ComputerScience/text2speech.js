var msg = new SpeechSynthesisUtterance();
// Your message below
msg.text = "My browser will say this sentence!";
window.speechSynthesis.speak(msg);