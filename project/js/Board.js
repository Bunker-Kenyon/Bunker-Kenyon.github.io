/***********************************
 * BOARD
 * Main entry point for Widget
 ***********************************/

import { Weather } from './Weather.js';
import { LocalStorageHelper } from './LocalStorageHelper.js';
var zipCodeArray = [];
var loopCardsLoopCount = 0;
const localStorageHelper = new LocalStorageHelper(zipCodeArray);
//Weather object (I love ES6!)  
const weather = new Weather();

//Main function for populateing the weather widget
window.populateWeather = function(zipCode) {
  
  //API Key
  const key = weather.getKey();

  //calls calcWeather from Weather
  //Does all the heavy work of popualting the data in the widget
  weather.calcWeather(zipCode, key, (thisWeather) => {
      document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
      document.getElementById("condition").innerHTML = weather.getCondition();
      document.getElementById("plc").innerHTML = weather.getCity();
      document.getElementById("dt").innerHTML = formatDate(new Date());

      var video = document.getElementById("vd");
      video.src = "media\\" + weather.getVidLink();
  });

    //Provides proper formating for the date and gets the current date
    function formatDate(date) {
        var monthNames = [
          "Jan", "Feb", "March",
          "April", "May", "June", "July",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
}

//Sets the zip codes to be used by the Weather object,
//populates the html zipcode list
//saves the zipcodes to localStorage
window.setZipCodes = function()  {
  let zipcode = document.getElementById('zipcode').value
  if (weather.isValidUSZip(zipcode) === true) {
    let node = document.createElement('li');
    let textnode = document.createTextNode(zipcode);
    node.appendChild(textnode);
    document.getElementById('zipCodesList').appendChild(node);
    zipCodeArray.push(zipcode);
    console.log("zipCodeArray to save: " + zipCodeArray.toString());
    localStorageHelper.saveZipCodes();
  }
  else {
    alert('Please input at a proper zip code');
  }
}

//Loads the zipcodes from localstorage,
//popualtes the html zipcode list
window.loadZipCodes = function() {
  if(localStorage.getItem(localStorageHelper.getItemKey()) === null) {
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
      document.getElementById("load").classList.remove('pulsateButton');
    }
  }
}

//Loops though the locations, displays the weather for each and ends
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
  }, 20000)
}

//Opening animation
window.startAnimation = function () {
  var x = document.getElementById("board");
  x.style.animation = "nudge 4.5s linear";
}

//FadeOut animation
window.fadeOut = function () {
  var x = document.getElementById("board");
  x.style.animation = "fadeOut 4.5s linear";
}

//PulsateButton animation. Activates on load when there are zipcodes in local storage
window.pulsateButton = function () {
  if(localStorage.getItem(localStorageHelper.getItemKey()) !== null) {
    document.getElementById("load").classList.add('pulsateButton');
  }
}

//CLears local storage and the html list of zipcodes
window.clearZipCodes = function () {
  //Clear the storage
  localStorageHelper.clearLocalStorage();

  //removes the pulsate from the laod button
  document.getElementById("load").classList.remove('pulsateButton');

  //Clears html zip code list
  let zipCodeList = document.getElementById("zipCodesList");
  zipCodeList.innerHTML = '';

  //Re-adds the first li of 'Zip Codes'
  let node = document.createElement('li');
  let textnode = document.createTextNode("Zip Codes");
  node.appendChild(textnode);
  zipCodeList.appendChild(node);
}




/*
TODO:
1. User Input validation for zipcodes
2. Done - I ran into an issue with AJAX where if I tried to get weather without loading saved zip codes it wouldn't work
3. Done - Make button for clearing zipcodes
4. Done - Better Instructions for loop. Maybe shorten the loop?
*/