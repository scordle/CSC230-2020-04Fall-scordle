"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Pam Carls 
   Date:   2018-03-01
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

/* Display the election results title */
var reportHTML = "<h1>" + raceTitle + "</h1>";

/* Loop through each race in the report */
for (var i = 0; i < race.length; i++) {
   
   /* Calculate the total number of votes in each race */
   var totalVotes = 0;
   votes[i].forEach(calcSum);
  
   /* Generate the HTML code showing the race name and title row */ 
   reportHTML += "<table>";
   reportHTML += "<caption>" + race[i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
   
   /* Generate the HTML code for each candidate row */
   reportHTML += candidateRows(i, totalVotes);
   
   reportHTML += "</table>";
     
}

/* Display the report in the first and only section element */
document.getElementsByTagName("section")[0].innerHTML = reportHTML;


/* Function to generate the candidate rows */
function candidateRows(raceNum, totalVotes) {
   var rowHTML = "";
   
   /* Loop through three candidates */
   for (var j = 0; j <= 2; j++) {
      
      /* Votes and Affiliation of the current candidate in the loop */
      
      var candidateName = candidate[raceNum][j];
      var candidateParty = party[raceNum][j];      
      var candidateVotes = votes[raceNum][j];
      
      /* Calculate the percent of the vote by each candidate */
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      
      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + " (" + candidateParty + ") </td>";
      rowHTML += "<td>" + candidateVotes.toLocaleString() + "( " + candidatePercent.toFixed(1) + "%)</td>";
      
      /* Generate a bar chart showing the candidate's vote percentage */
      for (var k = 0; k < candidatePercent; k++ ) {
         rowHTML += createBar(candidateParty);
      }
      
      rowHTML += "</tr>";
   }
   
   return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

/* Function to create a bar chart for different candidate vote percentages */
function createBar(partyType) {
   /* Write a table cell for each percentage point */
   var barHTML = "";
   switch (partyType) {
      case "D": barHTML="<td class='dem'></td>";break;
      case "R": barHTML="<td class='rep'></td>";break;
      case "I": barHTML="<td class='ind'></td>";break;
   }

   return barHTML;
}   