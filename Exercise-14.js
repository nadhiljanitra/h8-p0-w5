function changeVocals(str) {
  var vocals = "aeiou";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var nextVocals = "";
  for (var i = 0; i < str.length; i++) {
    var check = true;
    for (var j = 0; j < vocals.length; j++) {
      if (str[i] === vocals[j]) {
        for (var k = 0; k < alpha.length; k++) {
          if (str[i] === alpha[k]) {
            nextVocals = nextVocals + alpha[k + 1];
            check = false;
          }
        }
      } else if (str[i].toUpperCase() === vocals[j].toUpperCase()) {
        for (var k = 0; k < alpha.length; k++) {
          if (str[i].toUpperCase() === alpha[k].toUpperCase()) {
            nextVocals = nextVocals + alpha[k + 1].toUpperCase();
            check = false;
          }
        }
      }
    }
    if (check) {
      nextVocals = nextVocals + str[i];
    }
  }
  return nextVocals;
}

function reverseWord(str) {
  var reversed = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

function setLowerUpperCase(str) {
  var lowUpCase = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      lowUpCase += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      lowUpCase += str[i].toUpperCase();
    }
  }
  return lowUpCase;
}

function removeSpaces(str) {
  var final = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      final += str[i];
    }
  }
  return final;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  var vocals = changeVocals(name);
  var reverse = reverseWord(vocals);
  var lowerCase = setLowerUpperCase(reverse);
  var password = removeSpaces(lowerCase);
  return password;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
