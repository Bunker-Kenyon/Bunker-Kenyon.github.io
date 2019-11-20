import { Weather } from './Weather.js';

window.populateWeather = function(zipCode) {
    const weather = new Weather();
    const key = weather.getKey();

    var weatherInfo = weather.calcWeather(zipCode, key);
    document.getElementById("temp").innerHTML = "<span>" + weatherInfo[0] + "&deg</span>";
    
}