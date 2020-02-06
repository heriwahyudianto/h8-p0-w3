function angkaPalindrome(num) {
  // you can only write your code here!
  let palindrome = '';
  while (num.toString() !== palindrome ) {
    num++;
    palindrome = num.toString().split("").reverse().join("");
  }
  return palindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001