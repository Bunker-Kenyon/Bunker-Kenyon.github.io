import { Weather } from './Weather.js';
import { LocalStorageHelper } from './LocalStorageHelper.js';
var zipCodeArray = [];
var loopCardsLoopCount = 0;

window.populateWeather = function(zipCode) {
    const weather = new Weather();

    //API Key
    const key = weather.getKey();

    weather.calcWeather(zipCode, key, (thisWeather) => {
        document.getElementById("temp").innerHTML = "<span>" + weather.getTempurature() + "&deg</span>";
        document.getElementById("condition").innerHTML = weather.getCondition();
        document.getElementById("plc").innerHTML = weather.getCity();
        document.getElementById("dt").innerHTML = formatDate(new Date());

        var video = document.getElementById("vd");
        video.src = "media\\" + weather.getVidLink();
    });

    function formatDate(date) {
        var monthNames = [
          "Jan", "Feb", "March",
          "April", "May", "June", "July",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
    
}

window.setZipCodes = function()  {
  let zipcode = document.getElementById('zipcode').value
  
  let node = document.createElement('li');
  let textnode = document.createTextNode(zipcode);
  node.appendChild(textnode);
  document.getElementById('zipCodesList').appendChild(node);
  zipCodeArray.push(zipcode);
  console.log("zipCodeArray: " + zipCodeArray.toString());

  const localStorageHelper = new LocalStorageHelper(zipCodeArray);

  localStorageHelper.saveZipCodes();
  
}
var i = 0;
window.loopCards = function() {
  setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    populateWeather(zipCodeArray[i])          //  your code here
    i++;                     //  increment the counter
    if (i < zipCodeArray.length) {            //  if the counter < 10, call the loop function
      console.log("ZipCode in Array: " + zipCodeArray[i]);
      loopCards();             //  ..  again which will trigger another 
    }                        //  ..  setTimeout()
  }, 3000)

}
/*window.addCards = function() {
  //Create the widget
  let art = document.createElement('article');
  art.className = 'widget';


}*/

/*for (var i = 0; i < zipCodeArray.length; i++) {
    populateWeather(zipCodeArray[i]);
    console.log("Loop Number: " + i);
    setTimeout(loopCards, 30000);*/
