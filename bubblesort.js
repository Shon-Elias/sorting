
function bubbleSort(array){
  var temp;
  // var iSorted = true;
  for(var i = 0; i < array.length - 1 ; i++){

    for (var j = 0; j < array.length - i; j++) {
      numberOfSwap(j,[j+1], array);

    }

  }
  return array;
}

function numberOfSwap(index1, index2, array){

  if(array[index1] > array[index2]){
        // is
        temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
  }

  return array;

}
