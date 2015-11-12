(function() {
  'use strict';

  var ƒ = module.exports = {
    /**
     * Function composition
     * @param ...fs functions to compose
     * @return composed function
     **/
    comp:
      (...fs) => {
        return (...args) =>
          fs.map(
            f =>
              args = [f.apply(null, args)]
          ).pop();
        },

    /**
     * Flip function arguments
     * @param f function to flip
     * @return f applied with args in reverse order
     **/
    flip:
      f =>
        (...args) =>
          f.apply(null, args.reverse()),

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
    until:
      (condition, f) =>
        (...args) => {
          var r = f.apply(null, args);
          return condition(r) ? r : ƒ.until(condition, f)(r);
        },

    /**
     * List operations
     **/
    head:
      (...xs) => xs[0],
    last:
      (...xs) => xs.slice(-1),
    tail:
      (...xs) => Array.prototype.slice.call(xs, 1),
    init:
      (...xs) => xs.slice(0, -1),

    /**
     * Special folds
     * TODO: and
     * TODO: or
     * TODO: any
     * TODO: all
     **/
    concat:
      (...xs) => xs.reduce((a, b) => a.concat(b)),
    concatMap:
      (f, ...xs) => ƒ.concat(xs.map(f)),

    /**
     * Zip two arrays into a list of n-ples
     * @param ...xs arrays to zip
     * @return a list of of n-ples
     **/
    zip:
      (...xs) => {
        var r = [],
            nple = [],
            length = Math.min.apply(null, xs.map(x => x.length));

        for (var i = 0; i < length; i++) {
          xs.forEach(
            x => nple.push(x[i])
          );

          r.push(nple);
          nple = [];
        }

        return r;
      },

    /**
     * Generalises zip by zipping with the function given
     * as the first argument, instead of a tupling function.
     * @param op function to zip with
     * @param ...xs arrays to zip
     * @return array zipped with the op function
     **/
    zipWith:
      (op, ...xs) =>
        ƒ.zip.apply(null, xs).map(
          (x) => x.reduce(op)
        )
  };
}());
