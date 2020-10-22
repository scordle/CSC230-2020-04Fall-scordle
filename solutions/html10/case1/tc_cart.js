"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Sarah Nodheim
   Date:   2018-03-01
   
   Filename: tc_cart.js
	
*/


/* Record the total cost of the customer order */
var orderTotal = 0;

/* The cartHTML variable will store the HTML code of the shopping cart table */
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";



/* Loop through the item array, adding one table row each item ordered */
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   
   /* Calculate the cost of the item(s) ordered  */
   var itemCost = itemPrice[i]*itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";

   /* Keep a running total of the customer order cost */   
   orderTotal += itemCost;
}

/* Add a table row displaying the total cost of the order */
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";

cartHTML += "</table>";

/* Write the HTML code into the shopping cart table */
document.getElementById("cart").innerHTML = cartHTML;

