function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = arr.indexOf('o');
  let indexX = arr.indexOf('x');
  if (indexX < 0 || indexO < 0) {
    return 0;
  } else {
    if (indexO < indexX) {
      return indexX - indexO;  
    } else {
      indexX = arr.lastIndexOf('x');
      return indexO - indexX;
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2