# ƒ

Implementing native versions of  [Haskell](https://haskell.org) functions according to JavaScript ES6 standards.

**Blog posts:**

1. [Haskell in ES6: Part 1](http://casualjavascript.com/javascript/es6/haskell/native/implementation/2015/11/12/haskell-in-es6-part-1.html)

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

* [x] [`(.)`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:.) as `ƒ.comp`,
* [x] [`flip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:flip) as `ƒ.flip`,
* [x] and [`until`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:until) as `ƒ.until`.

**List operations:**
* [x] [`head`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.head`,
* [x] [`last`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:last) as `ƒ.last`,
* [x] [`tail`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:tail) as `ƒ.tail`,
* [x] and [`init`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.init`.

**Special folds:**

* [x] [`concat`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concat) as `ƒ.concat`,
* [x] and [`concatMap`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concatMap) as `ƒ.concatMap`.

**Infinite lists:**

* [x] [`iterate`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:iterate) as `ƒ.iterate`,
* [x] [`repeat`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:repeat) as `ƒ.repeat`,
* [x] [`replicate`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:replicate) as `ƒ.replicate`,
* [x] and [`cycle`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:cycle) as `ƒ.cycle`.

**Sublists:**

* [x] [`take`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:take) as `ƒ.take`.

**Zipping and unzipping lists:**
* [x] [`zip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zip) as `ƒ.zip`,
* [x] and [`zipWith`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zipWith) as `ƒ.zipWith`.
