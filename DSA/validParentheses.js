function isBalancedBrackets(str) {
  let stack = [];
  let bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
        return "not Valid";
      }
    }
  }
  return stack.length === 0 ? "valid" : "not Valid";
}

console.log(isBalancedBrackets("{[()]}"));
console.log(isBalancedBrackets("{[(])}"));
console.log(isBalancedBrackets("{[()]}[]"));
console.log(isBalancedBrackets("({[}])"));
console.log(isBalancedBrackets("(){}[]"));
console.log(isBalancedBrackets("("));
