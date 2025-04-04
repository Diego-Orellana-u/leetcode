// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x: number): boolean {
  // no convertir a string, pero se puede convertir a un array con numeros individuales

  if (x < 0) return false; //Avoiding calculations on negative numbers because they can't be a palindrome
  let originalArr: number[] = [];
  let palindromeArr: number[] = [];

  while (x > 0) {
    palindromeArr.push(x % 10);
    originalArr.unshift(x % 10);
    x = Math.floor(x / 10);
  }
  return originalArr.every((v, i) => v === palindromeArr[i]);
}
