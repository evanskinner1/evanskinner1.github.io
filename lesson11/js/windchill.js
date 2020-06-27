document.addEventListener("DOMContentLoaded", function () {

    
    let temp = document.querySelector("#ctemp").innerText;
    let speed = document.querySelector("#cspeed").innerText;
    let windchill = document.getElementById('windchill');

    windchill.innerHTML = buildWC(speed, temp);
});

// Calculate the Windchill
function buildWC(speed, temp) {


    //let windchill = document.getElementById('windchill');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    // Display the windchill
    console.log(wc);
    //windchill.innerHTML = wc;
    return wc;
}