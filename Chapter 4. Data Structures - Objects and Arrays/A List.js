const arrToList = (arr) => {
  if (arr === null || arr === undefined || arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};

const listToArray = (first) => {
  if (first === null || first === undefined) {
    return [];
  }

  let res = [];
  let temp = first;

  while (temp !== null) {
    res.push(temp.value);
    temp = temp.rest;
  }
  return res;
};

let arr = [1, 2, 3, 4, 5, 6];
let first = arrToList(arr);
let arrAfter = listToArray(first);

console.log(first);
console.log(arrAfter);
