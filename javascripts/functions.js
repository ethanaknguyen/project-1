// jshint esversion: 7


//req 3B
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

  }
  return sum / arr.length;
}





//Req. 3C
let arrMax = (numbers) => {
  let currentMaximum = -Infinity;
  numbers.forEach(function(number){
    if (number > currentMaximum){
      currentMaximum = number;
    }
  });
  return currentMaximum;
};




let sumEvens = (arr) => {
  let sum = 0;
  for(let elem of arr){
    if (elem % 2 == 0)
    sum = sum + elem;
  }
  return sum;
};
