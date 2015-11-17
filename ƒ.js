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
export function head (x, ...xs) { return x; }
export function last (...xs) { return xs.slice(-1); }
export function tail (x, ...xs) { return xs; }
export function init (...xs) { return xs.slice(0, -1); }

/**
 * Special folds
 **/
export function concat (...xs) {
  return xs.reduce(
    (a, b) => a.concat(b)
  );
}

export function concatMap (f, ...xs) {
  return concat(xs.map(f));
}

/**
 * Returns an infinite list of repeated applications of f to x
 * @param f function to iterate with
 * @param x initial value
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

/**
 * Returns an infinite list, with x the value of every element
 * @param x value
 **/
export function repeat (x) {
  return Proxy.create({
    get: (_, property) =>
      isNaN(property) ?
        Infinity : x
  });
}

/**
 * Ties a finite list into a circular one, or equivalently,
 * the infinite repetition of the original list
 * @param xs list to be cycled
 **/
export function cycle (xs) {
  return Proxy.create({
    get: (_, property) =>
      isNaN(property) ?
        Infinity : xs[property % xs.length]
  });
}

/**
 * Applied to a list xs, returns the prefix of xs of length n
 * @param n number of elements to take
 * @param xs list to take from
 **/
export function take (n, xs) {
  if (n <= 0) return [];
  if (n >= xs.length) return xs;

  var r = [];
  for (var i = 0; i < n; i++)
    r.push(xs[i]);

  return r;
}

/**
 * Returns the suffix of xs after the first n elements
 * @param n number of elements to drop
 * @param xs list to drop from
 **/
export function drop (n, xs) {
  if (n <= 0) return xs;
  if (n >= xs.length) return [];

  if (xs.length === Infinity) {
    return Proxy.create({
      get: (_, property) =>
        isNaN(property) ?
          Infinity : xs[property + n]
    });
  }

  var r = [];
  for (var i = n; i < xs.length; i++)
    r.push(xs[i]);

  return r;
}

/**
 * Returns a tuple where first element is xs prefix of length n and
 * second element is the remainder of the list
 * @param n index to split at
 * @param xs list to split
 **/
export function splitAt (n, xs) {
  return [take(n, xs), drop(n, xs)];
}

/**
 * Applied to a predicate f and a list xs, returns the longest
 * prefix (possibly empty) of xs of elements that satisfy f
 * @param f predicate to satisfy
 * @param xs list to take from
 **/
export function takeWhile (f, xs) {
  var r = [];
  for (var i = 0; i < xs.length; i++) {
    if (!f(xs[i]))
      return r;
    r.push(xs[i]);
  }

  return r;
}

/**
 * Returns the suffix remaining after takeWhile
 * @param f predicate to satisfy
 * @param xs list to drop from
 **/
export function dropWhile (f, xs) {
  return drop(takeWhile(f, xs).length, xs);
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
  cycle,
  take,
  drop,
  splitAt,
  takeWhile,
  dropWhile,
  zip,
  zipWith
};
