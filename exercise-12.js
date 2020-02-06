function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let isGeometri = true;
  let kali1 = 1;
  let kali2 = 1;
  for (i = 0; i < arr.length - 2 ; i++) {
    kali1 = arr[i+1] / arr[i];
    kali2 = arr[i+2] / arr[i+1];
    if (kali1 != kali2 ) {
      isGeometri = false;
      break;
    }
  }
  return isGeometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false