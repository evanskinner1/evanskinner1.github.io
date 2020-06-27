var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
       



        document.querySelector('#condition').textContent = jsObject.list[0].weather[0].main;

        document.querySelector('#ctemp').textContent = Math.round(jsObject.list[0].main.temp);

        document.querySelector('#cspeed').textContent = Math.round(jsObject.list[0].wind.speed);

        document.querySelector('#humidity').textContent = jsObject.list[0].main.humidity;
        
        var temp = jsObject.list[0].main.temp;
        var speed = jsObject.list[0].wind.speed;
        var wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        wc = Math.floor(wc);
        wc = (wc > temp) ? temp : wc;
        document.querySelector('#windchill').textContent = Math.round(wc);  
         } );

// list[8].dt_txt
    
/*
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array


        document.querySelector('#current-temp').textContent = jsObject.list[0].main.temp;
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.querySelector('#icon').setAttribute('alt', desc);
*/