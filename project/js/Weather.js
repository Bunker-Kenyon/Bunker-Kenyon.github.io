export class Weather {
    city;
    tempurature;
    condition;

    weather(zipCode, key) {
        this.key = key;
        this.zipCode = zipCode;
    }

    getKey() { return "3c1f0026935cf8c5b2695f49e552d817"; }

    getZipCode() { return this.zipCode; }

    getCity() { return this.city; }

    getTempurature() { return this.tempurature; }

    getCondition() { return this.condition; }

    setZipCode(zipCode) { this.zipCode = zipCode; }



    calcWeather(zipCode, key) {
        this.zipCode = zipCode;
        this.key = key;

        var localWeather;
        var weatherInfo;
        
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
                this.condition = localWeather.weather[0].main;

                console.log(city);
                console.log(tempurature);
                console.log(condition);
            }
        };
        xmlhttp.open("GET", weatherURL, true);
        xmlhttp.send();

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