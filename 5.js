function interleave(array1, array2) {
  var newArray = [];
  var i;
  for (i =0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
    //or  newArray.push(array1[i], array2[i]);
  }
  console.log(newArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

