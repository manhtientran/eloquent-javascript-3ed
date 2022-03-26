const isEven = (n) => {
  if (n == 0) {
    return true;
  }
  if (n == 1) {
    return false;
  }
  return isEven(n - 2);
};

n = 25;
console.log(isEven(n));
