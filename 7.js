function multiplyList(array1, array2) {
  var i;
  var newArray = [];

  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i] * array2[i]);
  }

  console.log(newArray);
  
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

