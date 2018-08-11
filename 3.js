function halvsies(array) {
  var newArray = [[],[]];
  var i;

  for (i = 0; i < array.length; i++) {
    if (i < array.length / 2) {
      newArray[0].push(array[i]);
    } else {
      newArray[1].push(array[i]);
    }
  }

  console.log(newArray);
}
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

//better
// function halvsies(array) {
//   var half = Math.ceil(array.length / 2);
//   var firstHalf = array.slice(0, half);
//   var secondHalf = array.slice(half);

//   return [firstHalf, secondHalf];
// }

