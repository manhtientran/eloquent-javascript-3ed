const range = (start, end, step) => {
  if (step === undefined) {
    step = 1;
  }

  let res = [];

  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      res.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      res.push(i);
    }
  }

  return res;
};

const sum = (arr) => {
  let res = 0;
  for (let ele of arr) {
    res += ele;
  }
  return res;
};

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));
