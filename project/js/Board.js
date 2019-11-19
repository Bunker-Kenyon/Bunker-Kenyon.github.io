import { Weather } from './Weather.js';

window.populateWeather = function() {
    const weather = new Weather();
    const key = weather.getKey();

    weather.calcWeather(85140, key);
}