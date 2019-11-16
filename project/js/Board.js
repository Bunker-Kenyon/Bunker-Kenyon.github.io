import { Weather } from './Weather.js';

(function () {
    
    const weather = new Weather();
    const key = weather.getKey();

    var lw = weather.getWeather(85140, key);
    //weather.displayWeather();
    


}) ();