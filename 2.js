function union(array1, array2) {
  var newArray = [];
  var i;
  for (i = 0; i < array1.length; i++) {
    if (newArray.indexOf(array1[i]) == -1) {
      newArray.push(array1[i]);
    }
  }
  for (i = 0; i < array2.length; i++) {
    if (newArray.indexOf(array2[i]) == -1) {
      newArray.push(array2[i]);
    }
  }
  console.log(newArray);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
