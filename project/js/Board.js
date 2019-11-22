import { Weather } from './Weather.js';

window.populateWeather = function(zipCode) {
    const weather = new Weather();
    const key = weather.getKey();

    weather.calcWeather(zipCode, key, (thisWeather) => {
        document.getElementById("temp").innerHTML = "<span>" + weather.tempurature + "&deg</span>";
    });

    var x = 0;
    
}