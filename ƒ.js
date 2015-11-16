'use strict';

/**
 * Function composition
 * @param ...fs functions to compose
 * @return composed function
 **/
export function comp (...fs) {
  return (v, ...args) =>
    fs.reduceRight(
      (g, f) => f(g, ...args), v
    );
}

/**
 * Flip function arguments
 * @param f function to flip
 * @return f applied with args in reverse order
 **/
export function flip (f) {
  return (a, b, ...args) =>
    f(b, a, ...args);
}

/**
 * Applies a function which is passed as the second argument to
 * the third argument and it comapares the result with the condition,
 * if the condition evaluates to true, it prints the result, if not,
 * it passes the result to the function and repeats the cycle as long
 * as the condition is matched
 * @param condition condition to be applied to f
 * @param f function to match against
 * @return result if condition is true else repeat cycle
 **/
export function until (condition, f){
  return (...args) => {
    var r = f(...args);
    return condition(r) ? r : until(condition, f)(r);
  };
}

/**
 * List operations
 **/
export function head (x, ...xs) {
 return x;
}

export function last (...xs) {
  return xs.slice(-1);
}

export function tail (x, ...xs) {
  return xs;
}

export function init (...xs) {
  return xs.slice(0, -1);
}

/**
 * Special folds
 * TODO: and
 * TODO: or
 * TODO: any
 * TODO: all
 **/
export function concat (...xs) {
  return xs.reduce((a, b) => a.concat(b));
}

export function concatMap (f, ...xs) {
  return concat(xs.map(f));
}

/**
 * Infinite lists
 **/
export function iterate (f, x) {
  return Proxy.create({
    get: (_, property) => {
      if (isNaN(property))
        return Infinity;

      var r = x;
      for (var i = 0; i < property; i++)
        r = f(r);
      return r;
    }
  });
}

export function repeat (x) {
  return Proxy.create({
    get: (_, property) =>
      isNaN(property) ?
        Infinity : x
  });
}

export function replicate (count, x) {
  if (count === Infinity)
    return repeat(x);

  var r = [];
  for (var i = 0; i < count; i++)
    r.push(x);
  return r;
}

export function cycle (xs) {
  return Proxy.create({
    get: (_, property) =>
      isNaN(property) ?
        Infinity : xs[property % xs.length]
  });
}

/**
 * Sublists
 * TODO: drop
 * TODO: splitAt
 * TODO: takeWhile
 * TODO: dropWhile
 * TODO: span
 * TODO: break
 **/
export function take (n, xs) {
  if (n === Math.max(n, xs.length))
    return xs;

  var r = [];
  for (var i = 0; i < n; i++)
    r.push(xs[i]);

  return r;
}

/**
 * Zip two arrays into a list of n-ples
 * @param ...xs arrays to zip
 * @return a list of of n-ples
 **/
export function zip (...xs) {
  var r = [],
    nple = [],
    length = Math.min(...xs.map(x => x.length));

  for (var i = 0; i < length; i++) {
    xs.forEach(
      x => nple.push(x[i])
    );

    r.push(nple);
    nple = [];
  }

  return r;
}

/**
 * Generalises zip by zipping with the function given
 * as the first argument, instead of a tupling function.
 * @param op function to zip with
 * @param ...xs arrays to zip
 * @return array zipped with the op function
 **/
export function zipWith (op, ...xs) {
  return zip(...xs).map(
    x => x.reduce(op)
  );
}

export default {
  comp,
  flip,
  until,
  head,
  last,
  tail,
  init,
  concat,
  concatMap,
  iterate,
  repeat,
  replicate,
  cycle,
  take,
  zip,
  zipWith
};
