export const missingInteger = (arr) => {
  let result = 1;
  const list = arr.reduce((acc, val) => ({...acc, [val]: true}), {});

  while(list[result]) {
    result++;
  }
  return result;
};
