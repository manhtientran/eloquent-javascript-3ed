const reverseArray = (arr) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};

const reverseArrayInPlace = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
  return arr;
};

let arr = [1, 2, 3, 4, 5, 6];

let temp1 = reverseArray(arr);
console.log("temp1", temp1);
console.log("arr", arr);

let temp2 = reverseArrayInPlace(arr);
console.log("temp2", temp2);
console.log("arr", arr);
