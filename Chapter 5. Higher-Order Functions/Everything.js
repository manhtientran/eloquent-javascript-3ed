const every1 = (arr, check) => {
  for (let ele of arr) {
    if (!check(ele)) return false;
  }
  return true;
};
