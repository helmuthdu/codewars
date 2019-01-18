function isPrime(input) {
  const limit = Math.sqrt(input);
  for (let start = 2; start <= limit; start++) {
    if (input % start === 0) return false;
  }
  return input > 1;
}

export class Primes {
  static stream(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    return {
      next() {
        while (!isPrime(iterationCount++)) {}

        if (nextIndex <= end) {
          nextIndex += step;
          return { value: iterationCount - 1, done: false };
        }

        return { value: iterationCount - 1, done: true };
      }
    };
  }
}

// alternative

// export class Primes {
//   static * stream(n = 100) {
//     const primes = n < 2 ? [] : [2];
//
//     for (let i = 3; i <= n; i += 2) {
//       if (primes.every(x => i % x)) primes.push(i);
//     }
//
//     // replace this with your solution
//     for(let p of primes) {
//       yield p;
//     }
//   }
// }
