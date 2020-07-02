//const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

const requestURL = 'js/towns.json'



fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        const info = jsonObject['towns'];
        console.log(jsonObject); // temporary checking for valid response and data parsing
        for (let i = 0, x = info.length; i < x; i++) {

            if (document.querySelector('#preston') && info[i].name == "Preston" || document.querySelector('#fish-haven') && info[i].name == "Fish Haven" ||
            document.querySelector('#soda-springs') && info[i].name == "Soda Springs") {

                let card = document.createElement('section');
                let article = document.createElement('ul')
                let h2 = document.createElement('h2');

                h2.textContent = "Upcoming Events";

                var townEvents = info[i].events;
                for (var j = 0; j < townEvents.length; j++) {
                    if (i === 2) {
                        continue;
                    }

                    var listItem = document.createElement('li');
                    listItem.textContent = townEvents[j];
                    article.appendChild(listItem);
                }
               card.appendChild(h2);

                card.appendChild(article);

                document.querySelector('div.events').appendChild(card);

            }

        }
    })

    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })