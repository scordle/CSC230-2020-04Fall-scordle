"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Hector Sadler
   Date:   2018-03-01

*/

/* Execute the function to run and display the countdown clock */
showClock();
setInterval("showClock()", 1000);

/* Function to create and run the countdown clock */
function showClock() {
   /* Store the current date and time */
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = 
   "<span>" + localDate + "</span><span>" + localTime + "</span>";
   
   var j4Date = nextJuly4(thisDay); 
   j4Date.setHours(21);
     
   /* Calculate the days, hours, minutes, and seconds until July 4 at 9 p.m. */
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;
   
   /* Display the time left until July 4 at 9 p.m. */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}