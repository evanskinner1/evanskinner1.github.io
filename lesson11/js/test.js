//* Get Forecast data from OpenWeatherMap


//var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial";


fetch('http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial')
    .then((response) => response.json())
    .then((forecastData) => {
        console.log(forecastData);

        /*
        let forecastRequest = new XMLHttpRequest();
        let forecastApiURLstring = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial';
        forecastRequest.open('Get', forecastApiURLstring, true);
        forecastRequest.send();
        */
        //* Get correct days for five day forecast, compare dt_txt for time stamp 18:00:00 and loop
        function findDayOfWeek(apiDay) {
            var dayDate = new Date(apiDay);
            var day = dayDate.getDay();
            var dayOfWeek;
            switch (day) {
                case 0:
                    dayOfWeek = "Sun";
                    break;
                case 1:
                    dayOfWeek = "Mon";
                    break;
                case 2:
                    dayOfWeek = "Tue";
                    break;
                case 3:
                    dayOfWeek = "Wed";
                    break;
                case 4:
                    dayOfWeek = "Thu";
                    break;
                case 5:
                    dayOfWeek = "Fri";
                    break;
                case 6:
                    dayOfWeek = "Sat";
                    break;
                default:
                    break;
            }
            return dayOfWeek;
        }
        //forecastRequest.onload = function () {
        //let forecastData = JSON.parse(forecastRequest.responseText);
        //console.log(forecastData);

        var imageWeather = "https://openweathermap.org/img/w/";
        var forecastArray = forecastData.list;
        var dayOne, dayTwo, dayThree, dayFour, dayFive;
        var z = 0;

        for (var i = 0; i < forecastArray.length; i++) {
            var x = forecastData.list[i].dt_txt;
            var y = x.includes('18:00:00');
            if (y == true) {
                switch (z) {
                    case 0:
                        dayOne = forecastData.list[i];
                        break;
                    case 1:
                        dayTwo = forecastData.list[i];
                        break;
                    case 2:
                        dayThree = forecastData.list[i];
                        break;
                    case 3:
                        dayFour = forecastData.list[i];
                        break;
                    case 4:
                        dayFive = forecastData.list[i];
                        break;

                    default:
                        break;
                }
                z++;
            }

        }

        //* Write data into table by element IDs.

        document.getElementById("day-1").innerHTML = findDayOfWeek(dayOne.dt_txt);
        document.getElementById("day-2").innerHTML = findDayOfWeek(dayTwo.dt_txt);
        document.getElementById("day-3").innerHTML = findDayOfWeek(dayThree.dt_txt);
        document.getElementById("day-4").innerHTML = findDayOfWeek(dayFour.dt_txt);
        document.getElementById("day-5").innerHTML = findDayOfWeek(dayFive.dt_txt);

        document.getElementById("high-1").innerHTML = Math.round(dayOne.main.temp_max) + "&#8457;";
        document.getElementById("high-2").innerHTML = Math.round(dayTwo.main.temp_max) + "&#8457;";
        document.getElementById("high-3").innerHTML = Math.round(dayThree.main.temp_max) + "&#8457;";
        document.getElementById("high-4").innerHTML = Math.round(dayFour.main.temp_max) + "&#8457;";
        document.getElementById("high-5").innerHTML = Math.round(dayFive.main.temp_max) + "&#8457;";

        document.getElementById("img-1").setAttribute("src", imageWeather + dayOne.weather[0].icon + ".png");
        document.getElementById("img-2").setAttribute("src", imageWeather + dayTwo.weather[0].icon + ".png");
        document.getElementById("img-3").setAttribute("src", imageWeather + dayThree.weather[0].icon + ".png");
        document.getElementById("img-4").setAttribute("src", imageWeather + dayFour.weather[0].icon + ".png");
        document.getElementById("img-5").setAttribute("src", imageWeather + dayFive.weather[0].icon + ".png");


    });