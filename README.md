# ƒ

Implementing native versions of  [Haskell](https://haskell.org) functions according to JavaScript ES6 standards.

1. [Haskell in ES6: Part 1](http://casualjavascript.com/javascript/es6/haskell/native/implementation/2015/11/12/haskell-in-es6-part-1.html)
2. [Haskell in ES6: Part 2](http://casualjavascript.com/javascript/es6/haskell/native/implementation/2015/11/17/haskell-in-es6-part-2.html)

### Install & usage

```bash
$ git clone https://github.com/casualjs/f
$ npm install
```

```javascript
var ƒ = require('./lib/ƒ');
```

Test with:

```bash
$ npm test
```

### Functions

**Miscellaneous functions:**

* [x] [`(.)`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:.) as `ƒ.comp`
* [x] [`flip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:flip) as `ƒ.flip`
* [x] [`until`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:until) as `ƒ.until`

**List operations:**
* [x] [`head`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.head`
* [x] [`last`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:last) as `ƒ.last`
* [x] [`tail`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:tail) as `ƒ.tail`
* [x] [`init`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.init`

**Special folds:**

* [x] [`concat`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concat) as `ƒ.concat`
* [x] [`concatMap`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concatMap) as `ƒ.concatMap`

**Infinite lists:**

* [x] [`iterate`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:iterate) as `ƒ.iterate`
* [x] [`repeat`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:repeat) as `ƒ.repeat`
* [x] [`cycle`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:cycle) as `ƒ.cycle`

**Sublists:**

* [x] [`take`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:take) as `ƒ.take`
* [x] [`drop`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:drop) as `ƒ.drop`
* [x] [`splitAt`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:splitAt) as `ƒ.splitAt`
* [x] [`takeWhile`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:takeWhile) as `ƒ.takeWhile`
* [x] [`dropWhile`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:dropWhile) as `ƒ.dropWhile`

**Zipping and unzipping lists:**
* [x] [`zip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zip) as `ƒ.zip`
* [x] [`zipWith`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zipWith) as `ƒ.zipWith`
