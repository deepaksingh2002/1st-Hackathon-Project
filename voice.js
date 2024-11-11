const loadVoices = () => {
  window.speechSynthesis.onvoiceschanged = () => {

    let voices = window.speechSynthesis.getVoices();
 
    let voicesByLanguage = {};
    voices.forEach((voice) => {
      voicesByLanguage[voice.lang] = voice;
    });

    const speak = (text, languageCode) => {
    
      if (!languageCode) {
        languageCode = "en-US";
        languageCode = "en-UK";
      }

      if (!voicesByLanguage[languageCode]) {
        languageCode = "en-US";
        languageCode = "en-UK";
      }

      let msg = new SpeechSynthesisUtterance();

  
      msg.voice = voicesByLanguage[languageCode];
      msg.text = text;

      window.speechSynthesis.speak(msg);
    };

    let tags = document.querySelectorAll("p","h1","h2","li","option");

 
    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {

        let text = e.target.innerText;

// Change the background color of the tag
        tag.style.backgroundColor = "yellow";

// Detect the language of the text
        let languageCode = detectLanguage(text);

// Speak the text with the appropriate voice
        speak(text, languageCode);


        let interval = setInterval(() => {
          if (!window.speechSynthesis.speaking) {
            tags.style.removeProperty("background-color");
            clearInterval(interval);
          }
        }, 1000);
      });
    });
  };
};


loadVoices();

window.speechSynthesis.speak();
function detectLanguage(text) {
  let languageCode = getLanguageCodeFromText(text);
  return languageCode;
}

// language detection function
function getLanguageCodeFromText(text) {
  if (text.includes("हिंदी")) {
    return "hi-IN";
  } else if (text.includes("বাংলা")) {
    return "bn-IN";
  } else if (text.includes("मराठी")) {
    return "mr-IN";
  } else if (text.includes("भोजपुरी")) {
    return "bho-IN";
  } else if (text.includes("тамил")) {
    return "ta-IN";
  } else {
    return "en-US";
  }
}
