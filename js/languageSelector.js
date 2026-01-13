let dropdown = document.querySelector('.drop-down');
let list = document.querySelector('.list');
let language = document.querySelectorAll('.language');
let selectedLanguage = document.querySelector('.selectedLanguage');
let selectedFlag = document.querySelector('.selectedFlag');

// Determine the relative path based on the current location
const currentPaths = window.location.pathname;

let currentLanguage = localStorage.getItem('selectedLanguage');
let currentFlag = localStorage.getItem('selectedFlag');
if (currentLanguage === null) {
  localStorage.setItem('selectedLanguage', 'EN');
  localStorage.setItem('selectedFlag', 'English');
}
else {
  selectedLanguage.innerHTML = currentFlag;
  let flagUrl = `./images/icons/flags/${currentLanguage}.svg`;
  if (!document.currentScript.baseURI.includes('index'))
    flagUrl = `../images/icons/flags/${currentLanguage}.svg`;
  if (document.currentScript.baseURI.includes('projects'))
    flagUrl = `../../images/icons/flags/${currentLanguage}.svg`;
  selectedFlag.src = flagUrl;
}

dropdown.addEventListener('click', () => {
  list.classList.toggle('show');
});


language.forEach(el => {
  el.addEventListener('click', languageSwitcher);
})

var data = {
  "English": {
    "fullName": "Full Name",
    "mailAddress": "Email Address",
    "mobileNumber": "Mobile Number",
    "mailSubject": "Email Subject",
    "message": "Your message"
},
  "Français": {
    "fullName": "Nom Complet",
    "mailAddress": "Adresse Mail",
    "mobileNumber": "Numéro de téléphone",
    "mailSubject": "Sujet du mail",
    "message": "Votre message"
},
  "日本語": {
    "fullName": "氏名",
    "mailAddress": "メールアドレス",
    "mobileNumber": "携帯番号",
    "mailSubject": "件名",
    "message": "メッセージ"
  }
}

function changeContactPlaceholder() {
  /* Change placeholder according to the language selected */
  if (currentPaths.match('contact') != null) {
    document.querySelector('.fullName').placeholder = data[selectedLanguage.innerHTML].fullName;
    document.querySelector('.mailAddress').placeholder = data[selectedLanguage.innerHTML].mailAddress;
    document.querySelector('.mobileNumber').placeholder = data[selectedLanguage.innerHTML].mobileNumber;
    document.querySelector('.mailSubject').placeholder = data[selectedLanguage.innerHTML].mailSubject;
    document.querySelector('.message').placeholder = data[selectedLanguage.innerHTML].message;
  }
}

function languageSwitcher(e) {
  let img = e.currentTarget.querySelector('img');
  let txt = e.currentTarget.querySelector('.text'); 
  
  selectedFlag.src = img.src;
  selectedLanguage.innerHTML = txt.innerHTML;
  // Change the body style by accessing the first element of the list
  let body = document.getElementsByTagName('body')[0];

  changeContactPlaceholder();

  switch(selectedLanguage.innerHTML) {
    case 'English':
      localStorage.setItem('selectedLanguage', 'EN');
      localStorage.setItem('selectedFlag', 'English');
      body.style.fontFamily = "Merriweather, serif";
      break;
    case 'Français':
      localStorage.setItem('selectedLanguage', 'FR');
      localStorage.setItem('selectedFlag', 'Français');
      body.style.fontFamily = "Merriweather, serif";
      break;
    default:
      localStorage.setItem('selectedLanguage', 'JP');
      localStorage.setItem('selectedFlag', '日本語');
      body.style.fontFamily = "Noto Sans JP, sans-serif";
  }
  currentLanguage = localStorage.getItem('selectedLanguage');
  currentFlag = localStorage.getItem('selectedFlag');
}  

window.addEventListener('load', function() {
  changeContactPlaceholder();
});