const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning")
    }
    else if(hour>12 && hour<17){
        speak("Good Afternoon")
    }
    else{
        speak("Good Evenining ")
    }
}
window.addEventListener('load',()=>{
    speak("I AM EXPO  your prasnol assistent HOW MAY I HELP YOU");
    wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition =  new SpeechRecognition();
recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})
function takeCommand(message){
  if(message.includes('hey') || message.includes('hello')){
      speak("Hello Sir, How May I Help You?");
  }
  else if(message.includes("open home page")||message.includes("open the home page")){
      window.open("./index.html", "_blank");
      speak("Opening Expo...")
  }
  else if(message.includes("open sign up")||message.includes("open the signup page")){
      window.open("./signup.html", "_blank");
      speak("Opening the Sign up...")
  }
  else if(message.includes("open sign in")||message.includes("open the signin page")){
      window.open("./signin.html", "_blank");
      speak("Opening the sign in...")
  }
  else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
      window.open("./index.html", "+"),( "_blank");
      const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  }
  else if(message.includes('time')) {
      const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
      const finalText = time;
      speak(finalText);
  }
  else if(message.includes('date')) {
      const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
      const finalText = date;
      speak(finalText);
  }
  else {
      window.open("http:./index.html ", "+")}( "_blank");
      const finalText = "I found some information for " + message + " on EXPO";
      speak(finalText);
  }
