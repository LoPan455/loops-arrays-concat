/*
Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.

Your function should return a string that combines all of the values starting at the index of the number passed in through the end of the array.

*/

//Here is my array
var myArray = ["USDA","Prime","Academy","Is","Where","I","Want","To","Brew","Java","Script!"];

//here is where I declare the function
function concatArrayIndices(array, number){

//Here is where we try Pro Mode:  checking to make sure the number in the paramter is less than the array.length.  If the check is passed (i.e, "false", the rest of the code will run)
  if (number > array.length) {
    console.warn("The index number you entered is longer than the array");
    return
  } else {

//In order to get only the array items I want, I will create an empty array to hold the items I want
  var tempArray = [];

//We will then loop through each item in the array, starting with the first index number I want to include.  We will loop through each of the array elements and execute a small block of code
  for (var i = number; i < array.length; i++){

//the codeblock that will execute simply pushes each item into the temporary array of 'keepables'
    tempArray.push(array[i]);

  }

//I create a new string to hold the concatenated values of the tempArray, joined with an empty space.  I will simply return the newString string.
var newString = tempArray.join(' ');
return newString;


}
}
console.log(concatArrayIndices(myArray,1));
console.log(concatArrayIndices(myArray,5));
