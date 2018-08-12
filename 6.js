function showMultiplicativeAverage(array) {
  var i;
  var multiples = 1;
  var result;
  for (i = 0; i < array.length; i++) {
    multiples *= array[i];
  }
  result = multiples / array.length;
  result = result.toFixed(3);

  console.log(String(result));
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

