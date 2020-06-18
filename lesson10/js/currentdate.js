
let date = new Date(document.lastModified);
document.write(dateConvert(date));

function dateConvert(dateobj){
  var year = dateobj.getFullYear();
  var month= dateobj.getMonth();
  var date = dateobj.getDate();
  var day = dateobj.getDay();
  var months = ["January","February","March","April","May","June","Jul","August","September","October","November","December"];
  var dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return dates[parseInt(day)] + " " + date + " " + months[parseInt(month)-1] + " " + year;
}


 