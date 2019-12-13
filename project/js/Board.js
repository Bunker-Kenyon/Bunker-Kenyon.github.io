import { Weather } from './Weather.js';
import { LocalStorageHelper } from './LocalStorageHelper.js';
var zipCodeArray = [];
var loopCardsLoopCount = 0;
const localStorageHelper = new LocalStorageHelper(zipCodeArray);

window.populateWeather = function(zipCode) {
    const weather = new Weather();

    //API Key
    const key = weather.getKey();

    weather.calcWeather(zipCode, key, (thisWeather) => {
        document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
        document.getElementById("condition").innerHTML = weather.getCondition();
        document.getElementById("plc").innerHTML = weather.getCity();
        document.getElementById("dt").innerHTML = formatDate(new Date());

        var video = document.getElementById("vd");
        video.src = "media\\" + weather.getVidLink();
    });

    function formatDate(date) {
        var monthNames = [
          "Jan", "Feb", "March",
          "April", "May", "June", "July",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
      
    
}

window.setZipCodes = function()  {
  let zipcode = document.getElementById('zipcode').value
  
  let node = document.createElement('li');
  let textnode = document.createTextNode(zipcode);
  node.appendChild(textnode);
  document.getElementById('zipCodesList').appendChild(node);
  zipCodeArray.push(zipcode);
  console.log("zipCodeArray to save: " + zipCodeArray.toString());
  localStorageHelper.saveZipCodes();
}

window.loadZipCodes = function() {
  if(localStorage.getItem(localStorageHelper.getItemKey() === null)) {
    alert('No saved Zip Codes. Please add Zip Codes')
  }
  else {
    zipCodeArray = localStorageHelper.getZipCodes();
    console.log("ZipCodes from localStorage: " + zipCodeArray.toString());
    for (var i = 0; i < zipCodeArray.length; i++) {
      let node = document.createElement('li');
      let textnode = document.createTextNode(zipCodeArray[i]);
      node.appendChild(textnode);
      document.getElementById('zipCodesList').appendChild(node);
    }
  }
}

//Loops though the weather and ends
var i = 0;
window.loopCards = function() {
  startAnimation();
  
  populateWeather(zipCodeArray[i]);
  setTimeout(function () {
    
    i++;                     
    if (i < zipCodeArray.length) {            
      console.log("ZipCode in Array: " + zipCodeArray[i]);
      fadeOut();
      loopCards();             
    }                     
  }, 30000)
}

window.startAnimation = function () {
  var x = document.getElementById("board");
  x.style.animation = "nudge 4.5s linear";
}

window.fadeOut = function () {
  var x = document.getElementById("board");
  x.style.animation = "fadeOut 4.5s linear";
}