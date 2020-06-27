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

            if (info[i].name == "Preston" || info[i].name == "Soda Springs" || info[i].name == "Springfield") {

                let card = document.createElement('section');
                let article = document.createElement('ul')
                let h2 = document.createElement('h2');

                h2.textContent = info[i].name;

                var townEvents = info[i].events;
                for (var j = 0; j < townEvents.length; j++) {
                    if (i === 2) {
                        continue;
                    }

                    var listItem = document.createElement('li');
                    listItem.textContent = townEvents[j];
                    article.appendChild(listItem);
                }
                article.appendChild(h2);

                card.appendChild(article);

                document.querySelector('div.cards').appendChild(card);

            }

        }
    })

    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })