var factors = function(number) {
  var answer = [];
  var i = 0;

  while (i < number) {
    if (number % i == 0) {
      answer.push(i);
      console.log(answer);
    }  
    i++;
  }
}

console.log(factors(10));
