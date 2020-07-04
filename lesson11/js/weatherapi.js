/*
var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial";


fetch(apiURL)
*/

var city = document.getElementById("cityName").innerText;
var locationID;
switch (city) {
    case "Soda Springs":
        {
            locationID = "5607916";
            break;
        }
    case "Fish Haven":
        {
            locationID = "5585010"
            break;
        }
      
    default:
        {
            locationID = "5604473";
        }
}
    
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + locationID + '&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);



        document.querySelector('#condition').textContent = jsObject.list[0].weather[0].main;

        document.querySelector('#ctemp').textContent = Math.round(jsObject.list[0].main.temp) + "°F";

        document.querySelector('#cspeed').textContent = Math.round(jsObject.list[0].wind.speed) + " MPH";

        document.querySelector('#humidity').textContent = jsObject.list[0].main.humidity + "%";
        
        var temp = jsObject.list[0].main.temp;
        var speed = jsObject.list[0].wind.speed;
        var wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        wc = Math.floor(wc);
        wc = (wc > temp) ? temp : wc;
        document.querySelector('#windchill').textContent = Math.round(wc);  
         } );

