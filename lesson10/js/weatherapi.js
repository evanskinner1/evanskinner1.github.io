const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6";

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '03d.png'; // note the concatenation
const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.list[0].main.temp;

        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.querySelector('#icon').setAttribute('alt', desc);

    });