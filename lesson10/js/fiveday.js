
fetch('https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=96e53194a6fddf94252efa4fc674c5d6&units=imperial')
    .then((response) => response.json())
    .then((forecastData) => {
       

        function weekday(apiDay) {
            var dayDate = new Date(apiDay);
            var day = dayDate.getDay();
            var dayofweek;
            switch (day) {
                case 0:
                    dayofweek = "Sun";
                    break;
                case 1:
                    dayofweek = "Mon";
                    break;
                case 2:
                    dayofweek = "Tue";
                    break;
                case 3:
                    dayofweek = "Wed";
                    break;
                case 4:
                    dayofweek = "Thu";
                    break;
                case 5:
                    dayofweek = "Fri";
                    break;
                case 6:
                    dayofweek = "Sat";
                    break;
                default:
                    break;
            }
            return dayofweek;
        }
        var imageWeather = "https://openweathermap.org/img/w/";
        var forecastArray = forecastData.list;
        var c = 0;

        for (var i = 0; i < forecastArray.length; i++) {
            var a = forecastData.list[i].dt_txt;
            var b = a.includes('18:00:00');
            if (b == true) {
                switch (c) {
                    case 0:
                        day1 = forecastData.list[i];
                        break;
                    case 1:
                        day2 = forecastData.list[i];
                        break;
                    case 2:
                        day3 = forecastData.list[i];
                        break;
                    case 3:
                        day4 = forecastData.list[i];
                        break;
                    case 4:
                        day5 = forecastData.list[i];
                        break;

                    default:
                        break;
                }
                c++;
            }

        }

        document.getElementById("day1").innerHTML = weekday(day1.dt_txt);
        document.getElementById("day2").innerHTML = weekday(day2.dt_txt);
        document.getElementById("day3").innerHTML = weekday(day3.dt_txt);
        document.getElementById("day4").innerHTML = weekday(day4.dt_txt);
        document.getElementById("day5").innerHTML = weekday(day5.dt_txt);

        document.getElementById("max1").innerHTML = Math.round(day1.main.temp_max) + "&#8457;";
        document.getElementById("max2").innerHTML = Math.round(day2.main.temp_max) + "&#8457;";
        document.getElementById("max3").innerHTML = Math.round(day3.main.temp_max) + "&#8457;";
        document.getElementById("max4").innerHTML = Math.round(day4.main.temp_max) + "&#8457;";
        document.getElementById("max5").innerHTML = Math.round(day5.main.temp_max) + "&#8457;";

        document.getElementById("img1").setAttribute("src", imageWeather + day1.weather[0].icon + ".png");
        document.getElementById("img2").setAttribute("src", imageWeather + day2.weather[0].icon + ".png");
        document.getElementById("img3").setAttribute("src", imageWeather + day3.weather[0].icon + ".png");
        document.getElementById("img4").setAttribute("src", imageWeather + day4.weather[0].icon + ".png");
        document.getElementById("img5").setAttribute("src", imageWeather + day5.weather[0].icon + ".png");


    });