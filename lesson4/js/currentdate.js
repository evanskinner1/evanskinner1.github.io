
var now = new Date();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var thedate = day[now.getDay()]+", " + month[now.getMonth()] +" "+ now.getDate() + ", " + now.getFullYear();
document.getElementById("currentdate").innerHTML=thedate;



/*var string = document.lastModified;

document.write("Last Updated:" + " " + document.lastModified);*/
  
 