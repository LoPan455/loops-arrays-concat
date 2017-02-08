/*
Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.

Your function should return a string that combines all of the values starting at the index of the number passed in through the end of the array.

*/


var myArray = ["USDA","Prime","Academy","Is","Where","I","Want","To","Brew","Java","Script!"];

function concatArrayIndices(array, number){

  var tempArray = [];

  for (var i = number; i < array.length; i++){

    tempArray.push(array[i]);

  }

var newString = tempArray.join(' ');
return newString;


}

console.log(concatArrayIndices(myArray,1));







///
