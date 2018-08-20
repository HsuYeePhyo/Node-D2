//Time Out & Interval differences
var timeout =0;
setTimeout(function(){
    timeout++;
    console.log("set timeout >> "+ timeout); //to delay
}, 1000);

var interval=0;
setInterval(function(){
    interval++;
    console.log("set interval >> ", interval); //to retry
},5000);

const express= require('express');
const path = require('path');