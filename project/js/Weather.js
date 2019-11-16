export class Weather {
    weather(zipCode, key) {
        this.key = key;
        this.zipCode = zipCode;
        var city = '';
        var tempurature = '';
        var condition = '';
    }
    
    
    getKey() {
        let apiID = "3c1f0026935cf8c5b2695f49e552d817";
        return apiID;
    }

    getWeather(zipCode, key) {
        this.zipCode = zipCode;
        this.key = key;

        var localWeather;
        
        let weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip="
            + zipCode
            + ",us&units=imperial&APPID="
            + key;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                localWeather = JSON.parse(this.responseText);
                console.log(localWeather);

                this.city = localWeather.name;
                this.tempurature = localWeather.main.temp;
                this.condition = localWeather.weather.main;
            }
        };
        xmlhttp.open("GET", weatherURL, true);
        xmlhttp.send();

        console.log(this.city, + ", " + this.tempurature, ", " + this.condition);

        return localWeather;
    }
/*
    displayWeather() {
        let localWeather = this.getWeather(this.zipCode, this.key);
        let weatherDetails = JSON.parse(localWeather);

        city = weatherDetails.name;
        tempurature = weatherDetails.main.temp;
        condition = weatherDetails.weather.main;

        console.log(city, + ", " + tempurature, ", " + condition);

        
            Weather conditon types:
                Thunderstorm
                Drizzle
                Rain
                Snow
                Clear
                Clouds
                Other (haze, fog, etc)

        
    }*/
}