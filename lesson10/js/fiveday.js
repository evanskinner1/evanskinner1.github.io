
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



      

        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let tr1 = document.createElement('tr');
        let tr2 = document.createElement('tr');
        let tr3 = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        let th5 = document.createElement('th');
        
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td9 = document.createElement('td');
        let td10 = document.createElement('td');
        
        let image1 = document.createElement('img');
        let image2 = document.createElement('img');
        let image3 = document.createElement('img');
        let image4 = document.createElement('img');
        let image5 = document.createElement('img');


        td1.textContent = weekday(day1.dt_txt);
        td2.textContent = weekday(day2.dt_txt);
        td3.textContent = weekday(day3.dt_txt);
        td4.textContent = weekday(day4.dt_txt);
        td5.textContent = weekday(day5.dt_txt);

        
        image1.setAttribute("src", imageWeather + day1.weather[0].icon + ".png", 'alt',`weathericon`);
        image2.setAttribute("src", imageWeather + day2.weather[0].icon + ".png", 'alt',`weathericon`);
        image3.setAttribute("src", imageWeather + day3.weather[0].icon + ".png", 'alt',`weathericon`);
        image4.setAttribute("src", imageWeather + day4.weather[0].icon + ".png", 'alt',`weathericon`);
        image5.setAttribute("src", imageWeather + day5.weather[0].icon + ".png", 'alt',`weathericon`);

        td6.textContent = Math.round(day1.main.temp_max) + "°F";
        td7.textContent = Math.round(day2.main.temp_max) + "°F";
        td8.textContent = Math.round(day3.main.temp_max) + "°F";
        td9.textContent = Math.round(day4.main.temp_max) + "°F";
        td10.textContent = Math.round(day5.main.temp_max) + "°F";

        table.appendChild(tbody);
        tbody.appendChild(tr1);
       
       
        tbody.appendChild(tr1);
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);

        tr2.appendChild(th1);
        tr2.appendChild(th2);
        tr2.appendChild(th3);
        tr2.appendChild(th4);
        tr2.appendChild(th5);
        
        tbody.appendChild(tr2);
        th1.appendChild(image1);
        th2.appendChild(image2);
        th3.appendChild(image3);
        th4.appendChild(image4);
        th5.appendChild(image5);
        
        tbody.appendChild(tr3);
        tr3.appendChild(td6);
        tr3.appendChild(td7);
        tr3.appendChild(td8);
        tr3.appendChild(td9);
        tr3.appendChild(td10);

        document.querySelector('div.forcast').appendChild(table);

       

    });