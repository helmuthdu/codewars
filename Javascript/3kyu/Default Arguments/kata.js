export function defaultArguments(func, params) {
  const defs = func
    .toString()
    .replace(/(\/\/[^\n]+)|[\s\n]+|\/\*.*?\*\//gm, '')
    .match(/\(([^)]*)\)/)[1]
    .split(',')
    .map(e => params[e]);
  const wrap = (...args) => func(...args, ...defs.slice(args.length));
  return (wrap.toString = () => func.toString()), wrap;
}

// alternative solutions

// const getArgs = func =>
//   func
//     .toString()
//     .replace(/[/][/].*$/gm, '')
//     .replace(/\s+/g, '')
//     .replace(/[/][*][^/*]*[*][/]/g, '')
//     .split('(')[1]
//     .split(')')[0]
//     .split(',');
//
// export function defaultArguments(func, params) {
//   const defaultArgs = [];
//
//   const currentArgNames = getArgs(func);
//
//   if (!this.argNames || currentArgNames[0] !== '') {
//     this.argNames = currentArgNames;
//   }
//
//   for (let i = 0; i < this.argNames.length; i++) {
//     const defaultParam = params[this.argNames[i]];
//
//     if (defaultParam) defaultArgs[i] = params[this.argNames[i]];
//   }
//
//   return function() {
//     const currentArgs = defaultArgs.slice();
//     const argsArray = [].slice.call(arguments);
//
//     for (let i = 0; i < argsArray.length; i++) {
//       const newArg = argsArray[i];
//
//       currentArgs[i] = newArg;
//     }
//
//     return func.apply(null, currentArgs);
//   };
// }

// export function defaultArguments(func, params) {
//   const names =
//     func.names ||
//     func
//       .toString()
//       .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
//       .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0]
//       .split(',');
//
//   const detour = () => {
//     const input = arguments;
//     return func.apply(this, names.map((val, i) => (i < input.length ? input[i] : params[names[i]])));
//   };
//
//   detour.names = names;
//   return detour;
// }
