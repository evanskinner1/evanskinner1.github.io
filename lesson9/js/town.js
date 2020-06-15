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
             //console.table(jsonObject);  // temporary checking for valid response and data parsing
             for (let i = 0; i < info.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let p = document.createElement('p');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let image = document.createElement('img')
                
                

                h2.textContent = info[i].name;
                h4.textContent = info[i].motto;
                p.textContent = "Year Founded: " + info[i].yearFounded;
                p1.textContent = "Population: " + info[i].currentPopulation;
                p2.textContent = "Annual Rain Fall: " + info[i].averageRainfall;
                image.setAttribute('src', info[i].photo);
                


                card.appendChild(h2);
                card.appendChild(h4);
                card.appendChild(p);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(image);
                
                

                document.querySelector('div.cards').appendChild(card);
     } })

        .catch(function (error) {
            console.log('Fetch error: ', error.message);
        })