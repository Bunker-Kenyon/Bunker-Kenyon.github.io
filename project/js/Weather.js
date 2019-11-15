export class Weather {
    weather(zipCode, key) {
        this.key = key;
        this.zipCode = zipCode
    }
    
    getKey() {
        let apiID = "3c1f0026935cf8c5b2695f49e552d817";
        return apiID;
    }

    getWeather(zipCode, key) {
        this.zipCode = zipCode;
        this.key = key;

        let localWeather;
        
        let weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip="
            + zipCode
            + ",us&units=imperial&APPID="
            + key;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                localWeather = JSON.parse(this.responseText);
                console.log(localWeatherText);
            }
        };
        xmlhttp.open("GET", weatherURL, true);
        xmlhttp.send();

        return localWeather;
    }
}