function sorting(arrNumber) {
  var sorted = [];
  var base = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= base) {
      base = arrNumber[i];
      sorted.push(arrNumber[i]);
    }
  }
  if (arrNumber[0] === undefined) {
    return "";
  }
  return sorted;
}

function getTotal(arrNumber) {
  var highest = arrNumber[arrNumber.length - 1];
  var jumlah = 0;
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === highest) {
      jumlah += 1;
    }
  }
  if (highest === undefined) {
    return "";
  }
  return (
    "angka paling besar adalah " +
    highest +
    " dan jumlah kemunculan sebanyak " +
    jumlah +
    " kali"
  );
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
