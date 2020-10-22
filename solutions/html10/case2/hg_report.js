"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Sean Greer
   Date:   2018-03-01
   
   Filename: hg_report.js
	
*/

/* Write the summary of the game */
var gameReport;
gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By: " + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID +"' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

/* Insert the summary into the first and only article element */
document.getElementsByTagName("article")[0].innerHTML = gameReport;

/* Calculate the average customer rating of the game */
var ratingsSum = 0;
var ratingsCount = ratings.length;
/* Loop through all of the customer ratings */
for (var i = 0; i < ratingsCount; i++) {
   ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;

/* The ratingReport variable will show the first three customer reviews */
var ratingReport;
ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";


/* Loop through the first three customer reviews */
for (var i = 0; i < 3; i++) {
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";   
   ratingReport += "<tr><th>Rating</th><td>";
   
   /* Display one star image for each rating value given by the customer */
   for (var j = 1; j <= ratings[i]; j++) {
         ratingReport += "<img src='hg_star.png'  />";
   }
   ratingReport += "</td></tr>";
   ratingReport += "</table>";
   ratingReport += ratingSummaries[i];
   ratingReport += "</div>";
}

/* Write the ratingReport variable to the first and only aside element */
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;