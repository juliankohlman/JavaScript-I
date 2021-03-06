// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

// Be sure to read prompts carefully **Revisit Closures with Python Tutor
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => count += 1,
    decrement: () => count -= 1,
  };
};

// Struggled with limitFunctionCallCount
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (n === count) return null;
    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const resultCache = {};
  return (input) => {
    // if ({}.hasOwnProperty.call(cache, input)) return resultCache[input]
    // resultCache[input] = cb(input);
    // return resultCache[input];
    if (Object.keys(resultCache).length === 0) {
      resultCache[input] = cb(input);
      return resultCache[input];
    } else if (input in resultCache) {
      return resultCache[input];
    }
    resultCache[input] = cb(input);
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
