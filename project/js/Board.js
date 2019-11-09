import { Weather } from './Weather.js';

(function () {
    const weather = new Weather();

    weather.getWeather(85140, getKey());

}) ();