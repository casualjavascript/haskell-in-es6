'use strict'

/**
 * Function composition
 * @param ...fs functions to compose
 * @return composed function
 **/
;

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global._ = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.comp = comp;
  exports.flip = flip;
  exports.until = until;
  exports.head = head;
  exports.last = last;
  exports.tail = tail;
  exports.init = init;
  exports.concat = concat;
  exports.concatMap = concatMap;
  exports.iterate = iterate;
  exports.repeat = repeat;
  exports.cycle = cycle;
  exports.take = take;
  exports.drop = drop;
  exports.splitAt = splitAt;
  exports.takeWhile = takeWhile;
  exports.dropWhile = dropWhile;
  exports.zip = zip;
  exports.zipWith = zipWith;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function comp() {
    for (var _len = arguments.length, fs = Array(_len), _key = 0; _key < _len; _key++) {
      fs[_key] = arguments[_key];
    }

    return function (v) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return fs.reduceRight(function (g, f) {
        return f.apply(undefined, [g].concat(args));
      }, v);
    };
  }

  function flip(f) {
    return function (a, b) {
      for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      return f.apply(undefined, [b, a].concat(args));
    };
  }

  function until(condition, f) {
    return function () {
      var r = f.apply(undefined, arguments);
      return condition(r) ? r : until(condition, f)(r);
    };
  }

  function head(x) {
    return x;
  }

  function last() {
    for (var _len4 = arguments.length, xs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      xs[_key4] = arguments[_key4];
    }

    return xs.slice(-1);
  }

  function tail(x) {
    for (var _len5 = arguments.length, xs = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      xs[_key5 - 1] = arguments[_key5];
    }

    return xs;
  }

  function init() {
    for (var _len6 = arguments.length, xs = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      xs[_key6] = arguments[_key6];
    }

    return xs.slice(0, -1);
  }

  function concat() {
    for (var _len7 = arguments.length, xs = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      xs[_key7] = arguments[_key7];
    }

    return xs.reduce(function (a, b) {
      return a.concat(b);
    });
  }

  function concatMap(f) {
    for (var _len8 = arguments.length, xs = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
      xs[_key8 - 1] = arguments[_key8];
    }

    return concat(xs.map(f));
  }

  function iterate(f, x) {
    return Proxy.create({
      get: function get(_, property) {
        if (isNaN(property)) return Infinity;
        var r = x;

        for (var i = 0; i < property; i++) {
          r = f(r);
        }

        return r;
      }
    });
  }

  function repeat(x) {
    return Proxy.create({
      get: function get(_, property) {
        return isNaN(property) ? Infinity : x;
      }
    });
  }

  function cycle(xs) {
    return Proxy.create({
      get: function get(_, property) {
        return isNaN(property) ? Infinity : xs[property % xs.length];
      }
    });
  }

  function take(n, xs) {
    if (n <= 0) return [];
    if (n >= xs.length) return xs;
    var r = [];

    for (var i = 0; i < n; i++) {
      r.push(xs[i]);
    }

    return r;
  }

  function drop(n, xs) {
    if (n <= 0) return xs;
    if (n >= xs.length) return [];

    if (xs.length === Infinity) {
      return Proxy.create({
        get: function get(_, property) {
          return isNaN(property) ? Infinity : xs[property + n];
        }
      });
    }

    var r = [];

    for (var i = n; i < xs.length; i++) {
      r.push(xs[i]);
    }

    return r;
  }

  function splitAt(n, xs) {
    return [take(n, xs), drop(n, xs)];
  }

  function takeWhile(f, xs) {
    var r = [];

    for (var i = 0; i < xs.length; i++) {
      if (!f(xs[i])) return r;
      r.push(xs[i]);
    }

    return r;
  }

  function dropWhile(f, xs) {
    return drop(takeWhile(f, xs).length, xs);
  }

  function zip() {
    var _Math;

    for (var _len9 = arguments.length, xs = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      xs[_key9] = arguments[_key9];
    }

    var r = [],
        nple = [],
        length = (_Math = Math).min.apply(_Math, _toConsumableArray(xs.map(function (x) {
      return x.length;
    })));

    for (var i = 0; i < length; i++) {
      xs.forEach(function (x) {
        return nple.push(x[i]);
      });
      r.push(nple);
      nple = [];
    }

    return r;
  }

  function zipWith(op) {
    for (var _len10 = arguments.length, xs = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
      xs[_key10 - 1] = arguments[_key10];
    }

    return zip.apply(undefined, xs).map(function (x) {
      return x.reduce(op);
    });
  }

  exports.default = {
    comp: comp,
    flip: flip,
    until: until,
    head: head,
    last: last,
    tail: tail,
    init: init,
    concat: concat,
    concatMap: concatMap,
    iterate: iterate,
    repeat: repeat,
    cycle: cycle,
    take: take,
    drop: drop,
    splitAt: splitAt,
    takeWhile: takeWhile,
    dropWhile: dropWhile,
    zip: zip,
    zipWith: zipWith
  };
});