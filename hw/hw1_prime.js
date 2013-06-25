#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

// create an array to store prime numbers
var primeFunction = function(length) {
  var primeArray = [];
  for (i=2; i <= length; i++) {
    if (i%length === 0){ // do nothing 
    };
    prime = true;
    for (j=2; j < i; j++) {
      if (i%j === 0){ 
        prime = false; 
        break;
      }
    };
	if (prime) { 
			primeArray.push(i);
	 };
  }
	primeArray.splice(100);
  return primeArray;
}

var out = primeFunction(1000);
fs.writeFileSync(outfile, out);  
// console.log(out);
