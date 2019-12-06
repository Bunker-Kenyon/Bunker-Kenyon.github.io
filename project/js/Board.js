import { Weather } from './Weather.js';
var zipCodeArray = [];

window.populateWeather = function(zipCode) {
    const weather = new Weather();

    //API Key
    const key = weather.getKey();

    //local storage key
    let itemKey = "zipCodes";


    weather.calcWeather(zipCode, key, (thisWeather) => {
        document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
        document.getElementById("condition").innerHTML = weather.getCondition();
        document.getElementById("plc").innerHTML = weather.getCity();
        document.getElementById("dt").innerHTML = formatDate(new Date());

        var video = document.getElementById("vd");
        video.src = "media\\" + weather.getVidLink();

        zipCodeArray.push(zipCode);
        console.log("zipCodeArray: " + zipCodeArray.toString());
        localStorageHelper();
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

      function localStorageHelper() {
        if (localStorage.getItem(itemKey) === null) {
          alert('noStorage');
          localStorage.setItem(itemKey, JSON.stringify(zipCodeArray));
        }
        
        let retrievedData = localStorage.getItem(itemKey);
        let retrivedZipCodes = JSON.parse(retrievedData);
        console.log("retrivedZipCodes: " + retrivedZipCodes.toString());
        zipCodeArray = retrivedZipCodes;
        console.log("zipCodeArray after localStorage: " + zipCodeArray.toString());
      }
    
}