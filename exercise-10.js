
function perkalianUnik(arr) {
  // you can only write your code here!
  let hasilKali = 1;
  let yangAkanDikalikan = arr.slice();
  let arrHasilKali = [];
  for (i = 0; i < arr.length; i++ ) {
    yangAkanDikalikan = arr.slice();
    yangAkanDikalikan.splice(i,1);   
    hasilKali = 1; 
    for (c = 0; c < yangAkanDikalikan.length; c++) {
      hasilKali *= yangAkanDikalikan[c];
    }
    arrHasilKali.push(hasilKali);    
  }
  return arrHasilKali; 
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]