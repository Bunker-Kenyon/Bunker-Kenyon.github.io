import { Weather } from './Weather.js';

window.populateWeather = function(zipCode) {
    const weather = new Weather();
    const key = weather.getKey();

    weather.calcWeather(zipCode, key);

    document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
    var x = 0;
    
}