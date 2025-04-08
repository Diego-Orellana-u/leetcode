// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Solution 1: very ugly but beats 92.15% of other solutions
function romanToInt(s: string): number {
  let arr: string[] = s.split("");
  let finalNum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "I") {
      if (arr[i + 1] === "V") {
        finalNum += 4;
      } else if (arr[i + 1] === "X") {
        finalNum += 9;
      } else {
        finalNum += 1;
      }
    } else if (arr[i] === "X") {
      if (arr[i + 1] === "L") {
        finalNum += 40;
      } else if (arr[i + 1] === "C") {
        finalNum += 90;
      } else if (arr[i - 1] !== "I") {
        finalNum += 10;
      }
    } else if (arr[i] === "C") {
      if (arr[i + 1] === "D") {
        finalNum += 400;
      } else if (arr[i + 1] === "M") {
        finalNum += 900;
      } else if (arr[i - 1] !== "X") {
        finalNum += 100;
      }
    } else if (arr[i] === "V" && arr[i - 1] !== "I") {
      finalNum += 5;
    } else if (arr[i] === "L" && arr[i - 1] !== "X") {
      finalNum += 50;
    } else if (arr[i] === "D" && arr[i - 1] !== "C") {
      finalNum += 500;
    } else if (arr[i] === "M" && arr[i - 1] !== "C") {
      finalNum += 1000;
    }
  }
  return finalNum;
}

// Solution 2:
function romanToIntTwo(s: string): number {
  const calcScale = (c: string, a1: string, a2: string): number => {
    return c === a1 || c === a2 ? -1 : 1;
  };

  let result: number = 0;

  for (let n: number = 0; n < s.length; n++) {
    const nextChar: string = s[n + 1] || "";

    switch (s[n]) {
      case "M":
        result += 1000;
        break;
      case "D":
        result += 500;
        break;
      case "C":
        result += 100 * calcScale(nextChar, "M", "D");
        break;
      case "L":
        result += 50;
        break;
      case "X":
        result += 10 * calcScale(nextChar, "C", "L");
        break;
      case "V":
        result += 5;
        break;
      case "I":
        result += 1 * calcScale(nextChar, "X", "V");
        break;
    }
  }

  return result;
}
