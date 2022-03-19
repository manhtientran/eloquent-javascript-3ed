// let a = { name: "Manh" };

// let b = { name: "Manh" };

// console.log(a == b);
// console.log(a === b);

// a = { name: "Mike", name: "Manh" };
// b = { name: "Manh" };

// console.log(Object.keys(a));
// console.log(Object.keys(b));

// let a = { name: "Manh" };
// console.log(typeof typeof a);

const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  } else if (
    typeof a === "object" &&
    typeof b === "object" &&
    a !== null &&
    b !== null
  ) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    } else {
      for (let key of aKeys) {
        if (!bKeys.includes(key)) {
          return false;
        }
      }

      for (let key of aKeys) {
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
  } else {
    return false;
  }
};

let a = { name: "Manh" };
let b = { name: "Mike" };
console.log(deepEqual(a, b));
