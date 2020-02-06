function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let isAritmatika = true;
  let selisih1 = 0;
  let selisih2 = 0
  for (i = 0; i < arr.length - 2; i++) {
    selisih1 = arr[i+1] - arr[i];
    selisih2 = arr[i+2] - arr[i+1];
    if (selisih1 != selisih2 ) {
      isAritmatika = false;
    }
  }
  return isAritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false