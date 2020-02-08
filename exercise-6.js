function angkaPalindrome(num) {
  // you can only write your code here!
  if (num >= 0 && num < 9 ) {return ++num;}
  let palindrome = '';
  while (num.toString() !== palindrome ) {
    num++;
    palindrome = num.toString();
    let arrPalindrome = [];
    for (i=0; i < palindrome.length; i++) {
      arrPalindrome.push(palindrome[i]);
    }
    palindrome = '';
    for (j = arrPalindrome.length - 1; j >= 0; j--) {
      palindrome += arrPalindrome[j];
    }
  }
  return palindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001