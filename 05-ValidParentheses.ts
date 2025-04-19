// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// My First Solution:
function isValid(s: string): boolean {
  let arr = s.split("");
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let k = 0; k < arrLength; k++) {
      if (arr[k] === "(" && arr[k + 1] === ")") {
        arr.splice(k, 2);
      }

      if (arr[k] === "{" && arr[k + 1] === "}") {
        arr.splice(k, 2);
      }

      if (arr[k] === "[" && arr[k + 1] === "]") {
        arr.splice(k, 2);
      }
    }
  }

  if (arr.length === 0) return true;
  return false;
}

// My second solution:
function isValidTwo(s: string): boolean {
  let arrLength = s.length;
  for (let i = 0; i < arrLength; i++) {
    s = s.replaceAll("()", "");
    s = s.replaceAll("{}", "");
    s = s.replaceAll("[]", "");
  }

  if (s.length === 0) return true;
  return false;
}
