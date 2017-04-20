function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var length = wholeArray.length;
  var firstHalf = wholeArray.slice(0,Math.ceil(length/2));
  var secondHalf = wholeArray.slice(Math.ceil(length/2));
  console.log( firstHalf, secondHalf);
  return [firstHalf, secondHalf];

}
