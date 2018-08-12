function average(array) {
  var i;
  var average = 0;
  for (i = 0; i < array.length; i++) {
    average += array[i];
  }
  console.log(Math.floor(average/array.length));
}
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

