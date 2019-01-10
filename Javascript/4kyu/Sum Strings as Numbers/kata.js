const splitValue = value => value.split('').map(v => Number(v)).reverse();

export function sumStrings(a, b) {
  const a1 = a.length < b.length ? splitValue(a) : splitValue(b);
  const a2 = a.length < b.length ? splitValue(b) : splitValue(a);

  return a2.reduce((acc, val, index) => {
    acc[index] = (acc[index] || 0) + (a1[index] || 0) + val;
    if (acc[index] > 9) {
      const digit = acc[index] % 10;
      acc[index + 1] = (acc[index] - digit) / 10;
      acc[index] = digit;
    }
    if (index === a2.length - 1 && acc[acc.length - 1] === 0) {
      acc.pop();
    }
    return acc;
  }, []).reverse().join('');
}
