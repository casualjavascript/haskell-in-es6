# ƒ

Implementing native versions of  [Haskell](https://haskell.org) functions according to JavaScript ES6 standards.

Accompanying blog posts:

1. [Haskell in ES6: Part 1](http://casualjavascript.com/javascript/es6/haskell/native/implementation/2015/11/12/haskell-in-es6-part-1.html)

List of currently implemented functions:

* [`(.)`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:.) as `ƒ.comp`,
* [`flip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:flip) as `ƒ.flip`,
* [`until`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:until) as `ƒ.until`,
* [`head`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.head`,
* [`last`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:last) as `ƒ.last`,
* [`tail`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:tail) as `ƒ.tail`,
* [`init`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:head) as `ƒ.init`,
* [`concat`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concat) as `ƒ.concat`,
* [`concatMap`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:concatMap) as `ƒ.concatMap`,
* [`zip`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zip) as `ƒ.zip`,
* and [`zipWith`](http://hackage.haskell.org/package/base-4.8.1.0/docs/Prelude.html#v:zipWith) as `ƒ.zipWith`.

### Install & usage

```bash
$ git clone https://github.com/casualjs/f
$ npm install
```

```javascript
var ƒ = require('./lib/ƒ');
```

### Test

```bash
$ npm test
```
