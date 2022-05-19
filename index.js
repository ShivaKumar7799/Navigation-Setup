let downlinkNav = navigator.connection.downlink;
console.log("downlink returns the value of bandwidth of the networks in terms of megabytes", downlinkNav);
document.getElementById("downlinkNav").innerHTML = "downlink returns the value of bandwidth of the networks in terms of magabytes :" + downlinkNav;

if(navigator.connection.downlinkMax){
  console.log(navigator.connection.downlinkMax);
} else {
  console.log("downlinkMax Nav not supported, it is supported in web workers only")
}

let effectiveTypeNav = navigator.connection.effectiveType;
console.log("effectiveType Nav returns the type of connection in terms of 2g,3g,4g etc. My device effective Type:", effectiveTypeNav);
document.getElementById("effectiveTypeNav").innerHTML = "EffectiveType Nav returns the type of connection in terms of 2g,3g,4g etc. My device effective Type :" + effectiveTypeNav;

let saveDataNav = navigator.connection.saveData;
console.log("saveData Nav returns the boolean value whether the user is in saveData or Not", saveDataNav);
document.getElementById("saveDataNav").innerHTML = "SaveData Nav returns the boolean value whether the user is in saveData or Not :" + saveDataNav

let connectionTypeNav = NetworkInformation.type;
console.log("Type of connection", connectionTypeNav);
document.getElementById("connectionTypeNav").innerHTML ="Type of connection :"+ connectionTypeNav

let cookieEnabledNav = navigator.cookieEnabled;
console.log("cookies enabled", cookieEnabledNav);
document.getElementById("cookieEnabledNav").innerHTML = "cookies enabled :"+ cookieEnabledNav

let memory= navigator.deviceMemory;
console.log("The device Ram",memory);
document.getElementById("memory").innerHTML = "The device Ram :" + memory

let languageNav = navigator.language;
console.log("LanguageNav", languageNav);
document.getElementById("languageNav").innerHTML ="LanguageNav :" + languageNav

let onlineNav = navigator.onLine;
console.log("is online",onlineNav);
document.getElementById("onlineNav").innerHTML = "is online :" + onlineNav;

let pdfViewerEnabled = navigator.pdfViewerEnabled;
console.log("pdfViewerEnabled or not :", pdfViewerEnabled);
document.getElementById("pdfViewerEnabled").innerHTML = "pdfViewerEnabled or not :" +  pdfViewerEnabled

let numberOfCores = navigator.hardwareConcurrency;
console.log("number of cores", numberOfCores);
document.getElementById("numberOfCores").innerHTML = "number of cores :"+ numberOfCores

let multiTouching = navigator.maxTouchPoints;
console.log("multiTouching",multiTouching);
document.getElementById("multiTouching").innerHTML = "multiTouching :" + multiTouching

let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.table(supportedConstraints);

navigator.getBattery().then((resp) => {
  if(resp.level * 100 < 20){
  console.log("Device Charging level :",resp.level * 100);
  document.getElementById("chargingLevel").innerHTML ="Device Charging level is" + resp.level * 100 + "% Please connect the Charger"
  } else {
    document.getElementById("chargingLevel").innerHTML ="Device Charging level is " + resp.level * 100 + " % Sufficient amount of charge is available to run the application"
  }
  console.log("Device Charging or Not :",resp.charging);
  document.getElementById("deviceCharging").innerHTML = "Device Charging or Not :" + resp.charging;
});

let btn = document.getElementById('button')

btn.addEventListener('click', function() {
  let promise = Notification.requestPermission();
  promise.then((resp)=> document.getElementById("btn").innerHTML = "Notifications enabled or not  :" + resp)
  // wait for permission
  promise.then((resp)=> console.log(resp))
})


if("geolocation" in navigator){
  console.log("geo location availabe");
  navigator.geolocation.getCurrentPosition( (position) => {
        console.log(position)
        console.log("latitude",position.coords.latitude);
        console.log("longitude",position.coords.longitude);
        let latitude = document.getElementById("latitude").innerHTML = "latitude :" + position.coords.latitude;
        let longitude = document.getElementById("longitude").innerHTML = "longitude :" + position.coords.longitude;
  })
} else {
  console.log('geo location is not avialable')
}

// All these striked words are depreciated, not recommended to use. means outdated.
let appNameNav = navigator.appName;
console.log(appNameNav);
// NetScape is a famous web Browser in old days. So, on every browser it shows netScape only

let appNameVersionNav = navigator.appVersion;
console.log(appNameVersionNav);
// it tells total details of the version that we are using

let appCodeNameNav = navigator.appCodeName;
console.log(appCodeNameNav)
//

let appPlatformNav = navigator.platform;
console.log(appPlatformNav);

let userAgentNav = navigator.userAgent;
console.log(userAgentNav)

// tells the width of the screen of the device
console.log("screen width",screen.width);

// tells the height of the screen of the device
console.log("screen height", screen.height)

// tells about the width of the browser
console.log("browser Width",innerWidth);

let inputKey = document.getElementById('inputKey');

inputKey.addEventListener("keydown", e => {
  console.log(e)
  if(e.keyCode == 50){
    alert("Sorry, you cannot use this character");
    e.preventDefault();
  }
})

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
  files : ["https://cdn.pixabay.com/photo/2022/05/12/19/11/flowers-7192179__480.jpg","https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548__340.jpg"]
}

let shareBtn = document.getElementById("shareBtn")

shareBtn.addEventListener("click", function(){
  navigator.canShare(shareData). then( (resp) => console.log(resp)).catch((err) => console.log(err))
})

