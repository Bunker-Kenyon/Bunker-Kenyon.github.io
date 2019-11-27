import { Weather } from './Weather.js';

window.populateWeather = function(zipCode) {
    const weather = new Weather();
    const key = weather.getKey();

    weather.calcWeather(zipCode, key, (thisWeather) => {
        document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
        document.getElementById("condition").innerHTML = weather.getCondition();
        document.getElementById("plc").innerHTML = weather.getCity();
        document.getElementById("dt").innerHTML = formatDate(new Date());
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