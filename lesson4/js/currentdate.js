let date = new Date(document.lastModified);
var format = "YYYY-MMM-DD DDD";
document.write(dateConvert(date,format));

function dateConvert(dateobj){
  var year = dateobj.getFullYear();
  var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
  var date = ("0" + dateobj.getDate()).slice(-2);
  var day = dateobj.getDay();
  var months = ["January","February","March","April","May","June","Jul","August","September","October","November","December"];
  var dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return dates[parseInt(day)] + " " + date + " " + months[parseInt(month)-1] + " " + year;
}


/*var string = document.lastModified;

document.write("Last Updated:" + " " + document.lastModified);*/
  
 