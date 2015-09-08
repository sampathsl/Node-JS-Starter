/**
 * Module : Main 0.0.1v
 * Created by Sampath Thennakoon on 06/09/2015.
 */

var flights = require("./flight");

var flusa = {
    number : 234,
    origin : 'US',
    destination : 'LA'
}

var flusaCl = flights(flusa);

flusaCl.triggerDepart();

console.log(flusaCl.getFlightInfo());

console.log("------------------");

var fllk = {
    number : 2331,
    origin : 'LK',
    destination : 'CMB'
}

var fllkCl = flights(fllk);

fllkCl.triggerDepart();

console.log(fllkCl.getFlightInfo());

console.log("------------------");

console.log(flusaCl.getFlightInfo());

console.log("------------------");
