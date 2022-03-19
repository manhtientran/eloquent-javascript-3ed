const flatten = (arr) => {
  return arr.reduce((prev, curr) => prev.concat(curr));
};

arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];

console.log(flatten(arr));
