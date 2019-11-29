export class Weather {

    //Member variables
    city;
    tempurature;
    condition;
    vidLink;

    //Constructor
    weather(zipCode, key) {
        this.key = key;
        this.zipCode = zipCode;
    }

    getKey() { return "3c1f0026935cf8c5b2695f49e552d817"; }

    getZipCode() { return this.zipCode; }

    getCity() { return this.city; }

    getTempurature() { return this.tempurature; }

    getCondition() { return this.condition; }

    getVidLink() { return this.vidLink}

    setZipCode(zipCode) { this.zipCode = zipCode; }



    calcWeather(zipCode, key, callBack) {
        console.log(zipCode);
        this.zipCode = zipCode;
        this.key = key;

        var localWeather;
        var weatherInfo;
        
        let weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip="
            + zipCode
            + ",us&units=imperial&APPID="
            + key;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                localWeather = JSON.parse(xmlhttp.responseText);
                console.log(localWeather);

                this.city = localWeather.name;
                this.tempurature = (localWeather.main.temp).toFixed(0);
                this.condition = localWeather.weather[0].main;
                this.vidLink = this.calcWeatherCondition(this.condition);

                console.log(this.zipCode);
                console.log(this.city);
                console.log(this.tempurature);
                console.log(this.condition);
                console.log(this.vidLink);

                callBack();
            }
        };
        xmlhttp.open("GET", weatherURL, true);
        xmlhttp.send();

    }

    calcWeatherCondition(condition) {
        let vidLink;
        switch(condition) {
            case "Thunderstorm":
                vidLink = "thunderstorm.mp4";
                break;
            case "Drizzle":
                vidLink = "drizzle.mp4";
                break;
            case "Rain": 
                vidLink = "rain.mp4";
                break;
            case "Snow": 
                vidLink = "snow.mp4";
                break;
            case "Clear": 
                vidLink = "clear.mp4";
                break;
            case "Clouds": 
                vidLink = "clouds.mp4";
                break;
            default:
                vidLink = "fog.mp4";

        }

        return vidLink;
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