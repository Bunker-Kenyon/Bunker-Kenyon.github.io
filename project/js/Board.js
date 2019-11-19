import { Weather } from './Weather.js';

window.populateWeather = function() {
    const weather = new Weather();
    const key = weather.getKey();

    weather.getWeather(85140, key);
}