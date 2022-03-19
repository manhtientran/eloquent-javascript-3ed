// const loop = (value, test, update, body) => {
//   let res = [];
//   for (let ele of value) {
//     if (test(ele)) {
//       let curr = body(ele);
//       let newValue = update(curr);
//       res.push(newValue);
//     } else {
//       return null;
//     }
//   }
//   return res;
// };

const loop = (start, test, update, body) => {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
