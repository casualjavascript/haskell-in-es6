(function() {
  'use strict';

  var assert = require('assert'),
      ƒ = require('../ƒ');

  describe('ƒ.comp()',
    () => it('should be able to compose three functions correctly',
      () => {
        var add = x => x + x,
            pow = x => x * x,
            inv = x => 1 / x,
            comp = ƒ.comp(add, pow, inv);

        assert.equal(2, comp(1));
        assert.equal(1/8, comp(4));
      }
    )
  );

  describe('ƒ.flip()',
    () => it('should apply function with flipped arguments',
      () => {
        var add = (a, b) => a / b,
            flip = ƒ.flip(add);

        assert.equal(1/2, flip(10, 5));
        assert.equal(10, flip(1, 10));
      }
    )
  );

  describe('ƒ.until()',
    () => it('should run until condition is satisfied',
      () => {
        var condition = x => x > 100,
            inc = x => x + 1,
            until = ƒ.until(condition, inc);
        assert.equal(101, until(0));

        condition = x => x === 5;
        until = ƒ.until(condition, inc);
        assert.equal(5, until(3));
      }
    )
  );

  describe('ƒ.head()',
    () => {
      it('should return first argument',
        () => assert.equal(5, ƒ.head(5, 27, 3, 1))
      );
      it('should work on arrays',
        () => assert.equal(5, ƒ.head.apply(null, [5, 27, 3, 1]))
      );
    }
  );

  describe('ƒ.last()',
    () => {
      it('should return last argument',
        () => assert.equal(1, ƒ.last(5, 27, 3, 1))
      );
      it('should work on arrays',
        () => assert.equal(1, ƒ.last.apply(null, [5, 27, 3, 1]))
      );
    }
  );

  describe('ƒ.tail()',
    () => {
      it('should return all but first argument',
        () => assert.deepEqual([27, 3, 1], ƒ.tail(5, 27, 3, 1))
      );
      it('should work on arrays',
        () => assert.deepEqual([27, 3, 1], ƒ.tail.apply(null, [5, 27, 3, 1]))
      );
    }
  );

  describe('ƒ.init()',
    () => {
      it('should return all but last argument',
        () => assert.deepEqual([5, 27, 3], ƒ.init(5, 27, 3, 1))
      );
      it('should work on arrays',
        () => assert.deepEqual([5, 27, 3], ƒ.init.apply(null, [5, 27, 3, 1]))
      );
    }
  );

  describe('ƒ.concat()',
    () => {
      it('should concatenate args',
        () => assert.deepEqual([5, 27, 3], ƒ.concat([5], [27], [3]))
      );
      it('should work on arrays',
        () => assert.deepEqual([5, 27, 3], ƒ.concat.apply(null, [[5], [27], [3]]))
      );
    }
  );

  describe('ƒ.concatMap()',
    () => {
      var map = x => 'hi ' + x;
      it('should return all but last argument',
        () => assert.deepEqual(['hi 1', 'hi 2', 'hi 3'], ƒ.concatMap(map, 1, [[2]], 3))
      );
      it('should work on arrays',
        () => assert.deepEqual(['hi 1', 'hi 2', 'hi 3'], ƒ.concatMap.bind(null, map).apply(null, [1, [2], [[3]]]))
      );
    }
  );

  describe('ƒ.zip()',
    () => it('should form a list of n-ples of n arrays',
      () => {
        var a = [0, 1, 2],
            b = [3, 4, 5],
            c = [6, 7, 8];

        assert.deepEqual([[0, 3], [1, 4], [2, 5]], ƒ.zip(a, b));
        assert.deepEqual([[0, 3, 6], [1, 4, 7], [2, 5, 8]], ƒ.zip(a, b, c));
      }
    )
  );

  describe('ƒ.zipWith()',
    () => it('should zip n arrays and reduce the resulting n-ples with specified operator',
      () => {
        var a = [0, 1, 2],
            b = [3, 4, 5],
            c = [6, 7, 8],
            add = (a, b) => a + b,
            mul = (a, b) => a * b;

        assert.deepEqual([9, 12, 15], ƒ.zipWith(add, a, b, c));
        assert.deepEqual([18, 28, 40], ƒ.zipWith(mul, b, c));
      }
    )
  );
}());
