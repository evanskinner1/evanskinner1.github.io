
var x = document.getElementById("banner");
  var d = new Date();
  var n = d.getDay();
  if (n == 5 ) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.getElementById("banner").style.backgroundColor = "lightblue";
  document.getElementById("banner").style.padding = "30px 30px 30px 30px";
  document.getElementById("banner").style.textAlign = "center";
  document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
 

