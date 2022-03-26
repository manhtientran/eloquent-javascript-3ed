const countBs = (str) => {
  res = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      res += 1;
    }
  }
  return res;
};

const countChar = (str, ch) => {
  res = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      res += 1;
    }
  }
  return res;
};

str = "NIGRNIGRBBBBIEHB";
console.log(countBs(str));

console.log(countChar(str, "B"));
