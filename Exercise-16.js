function totalDigitRekursif(angka) {
    var string = `${angka}`
    var split = string.split('') 
    if (angka > 0){
        var pertama = split.shift()
        next = split.join('')
        return parseInt(pertama) + totalDigitRekursif(next)
    } else {
        return 0
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5