function countOccurrences(vehicles) {
  var occurrences = {};
  var i;

  for (i = 0; i < vehicles.length; i += 1) {
    occurrences[vehicles[i]] = occurrences[vehicles[i]] || 0;
    occurrences[vehicles[i]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  var item;
  for (item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
