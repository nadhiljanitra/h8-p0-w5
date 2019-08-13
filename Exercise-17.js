function kaliTerusRekursif(angka) {
  var string = `${angka}`;
  var arr = string.split("");
  var kali = 1;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    kali = kali * arr[i];
    result.push(kali);
  }
  var angka2 = result[result.length - 1];
  if (angka2 > 10) {
    return kaliTerusRekursif(angka2);
  } else {
    return angka2;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
