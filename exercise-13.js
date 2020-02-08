function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = 0;
  let indexX = 0;
  for(i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indexO = i;
      break;
    }
  }
  for(i = 0; i < arr.length; i++) {
    if (arr[i] === 'x' && i > indexO) {      
      indexX = i;
      break;
    } else if (arr[i] === 'x') {
      indexX = i;
    }
  }
  if (indexX === 0) {
    return 0;
  }
  return (indexX > indexO) ? indexX - indexO : indexO - indexX;  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2