export const missingInteger = (arr) => {
  let result = 1;
  while(arr.includes(result)) {
    result++;
  }
  return result;
};
