/**
 * Module : Main 0.0.2v
 * Created by Sampath Thennakoon on 06/09/2015.
 */

var flights = require("./flight");

var flusa = {
    number : 234,
    origin : 'US',
    destination : 'LA'
}

//var flusaCl = flights(flusa);
var flusaCl = flights.create(flusa);

flusaCl.triggerDepart();

console.log(flusaCl.getFlightInfo());

console.log("------------------");

var fllk = {
    number : 2331,
    origin : 'LK',
    destination : 'CMB'
}

//var fllkCl = flights(fllk);
var fllkCl = flights.create(fllk);

fllkCl.triggerDepart();

console.log(fllkCl.getFlightInfo());

console.log("------------------");

console.log(flusaCl.getFlightInfo());

console.log("------------------");

console.log("COUNT : " + flights.getCount());
console.log("DESTINATIONS : " + flights.getDestinations());