function pasanganTerbesar(num) {
  // you can only write your code here!
  let terbesar = null;
  num = num.toString();
  for (i=0; i<num.length; i++) {
    if (parseInt(num[i] + num[i+1]) > terbesar) {
      terbesar = parseInt(num[i] + num[i+1]);
    }
  }
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99