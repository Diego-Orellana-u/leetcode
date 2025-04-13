// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// My solution:
function longestCommonPrefix(strs: string[]): string {
  let prefix: string = "";
  let counter = strs.join("");
  let i = 0;
  let n = 0;
  while (counter.length + 1) {
    if (strs.length === 1) return strs[0];
    if (strs[i].length === 0) return "";
    if (typeof strs[i][n] === "undefined" && i === 0) return prefix;
    if (i === 0) prefix += strs[i][n];
    if (prefix[n] !== strs[i][n]) return prefix.slice(0, -1);

    if (i === strs.length - 1) {
      i = 0;
      n++;
    } else i++;

    counter = counter.slice(0, -1);
  }
  return "";
}
