'use strict';

import assert from 'assert';
import ƒ from './../ƒ';

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
          three = (a, b, c) => [a, b, c],
          flip = ƒ.flip(add);

      assert.equal(1/2, flip(10, 5));
      assert.equal(10, flip(1, 10));

      flip = ƒ.flip(three);
      assert.deepEqual([2, 1, 3], flip(1, 2, 3));
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
  () => it('should return first argument',
    () => assert.equal(5, ƒ.head([5, 27, 3, 1]))
  )
);

describe('ƒ.last()',
  () => it('should return last argument',
    () => assert.equal(1, ƒ.last([5, 27, 3, 1]))
  )
);

describe('ƒ.tail()',
  () => it('should return all but first argument',
    () => assert.deepEqual([27, 3, 1], ƒ.tail([5, 27, 3, 1]))
  )
);

describe('ƒ.init()',
  () => it('should return all but last argument',
    () => assert.deepEqual([5, 27, 3], ƒ.init([5, 27, 3, 1]))
  )
);

describe('ƒ.concat()',
  () => {
    it('should concatenate args',
      () => assert.deepEqual([5, 27, 3], ƒ.concat([5], [27], [3]))
    );
    it('should work on arrays',
      () => assert.deepEqual([5, 27, 3], ƒ.concat(...[[5], [27], [3]]))
    );
  }
);

describe('ƒ.concatMap()',
  () => {
    var map = x => 'hi ' + x;
    it('should map and concatenate results',
      () => assert.deepEqual(['hi 1', 'hi 2', 'hi 3'], ƒ.concatMap(map, 1, [[2]], 3))
    );
    it('should work on arrays',
      () => assert.deepEqual(['hi 1', 'hi 2', 'hi 3'], ƒ.concatMap.bind(null, map)(...[1, [2], [[3]]]))
    );
  }
);

describe('ƒ.iterate()',
  () => it('should return a proxy simulating an infinite list of repeated applications of f to x',
    () => {
      var iterate = ƒ.iterate(x => x * 2, 1);
      assert.equal(2, iterate[1]);
      assert.equal(16, iterate[4]);
      assert.equal(128, iterate[7]);
    }
  )
);

describe('ƒ.repeat()',
  () => it('should return a proxy simulating an infinite list of xs',
    () => {
      var repeat = ƒ.repeat(10);
      assert.equal(10, repeat[0]);
      assert.equal(10, repeat[10]);
      assert.equal(10, repeat[9999]);
    }
  )
);

describe('ƒ.cycle()',
  () => it('should return a proxy simulating an infinite list of repeated cycles of xs',
    () => {
      var list = [0, 1, 2],
          cycle = ƒ.cycle(list);
      for (var i = 0; i < 10; i++)
        assert.equal(i % list.length, cycle[i]);
    }
  )
);

describe('ƒ.take()',
  () => {
    it('should take n elements from xs or xs if n >= xs.length',
      () => {
        var list = [0, 1, 2, 3, 4, 5];

        assert.deepEqual([0, 1, 2], ƒ.take(3, list));
        assert.deepEqual([0, 1, 2, 3, 4, 5], ƒ.take(10, list));
      }
    );

    it('should work with infinite lists',
      () => assert.deepEqual([0, 1, 2, 0, 1, 2], ƒ.take(6, ƒ.cycle([0, 1, 2])))
    );
  }
);

describe('ƒ.drop()',
  () => {
    it('should drop n elements from xs or [] if n >= xs.length',
      () => {
        var list = [0, 1, 2, 3, 4, 5];

        assert.deepEqual([3, 4, 5], ƒ.drop(3, list));
        assert.deepEqual([], ƒ.drop(10, list));
      }
    );

    it('should work with infinite lists',
      () => assert.deepEqual([2, 0, 1, 2], ƒ.take(4, ƒ.drop(2, ƒ.cycle([0, 1, 2]))))
    );
  }
);

describe('ƒ.splitAt()',
  () => {
    it('should return a tuple with [take(n, xs), drop(n, xs)]',
      () => {
        assert.deepEqual([[0, 1, 2], [3, 4, 5]], ƒ.splitAt(3, [0, 1, 2, 3, 4, 5]));
        assert.deepEqual([[], [0, 1, 2]], ƒ.splitAt(-1, [0, 1, 2]));
        assert.deepEqual([[0, 1, 2], []], ƒ.splitAt(3, [0, 1, 2]));
      }
    );

    it('should work with infinite lists',
      () => assert.deepEqual([2, 0, 1, 2], ƒ.take(4, ƒ.drop(2, ƒ.cycle([0, 1, 2]))))
    );
  }
);

describe('ƒ.takeWhile()',
  () => {
    it('should return the longest prefix of xs of elements that satisfy f',
      () => assert.deepEqual([0, 1, 2], ƒ.takeWhile(x => x < 3, [0, 1, 2, 3, 4, 5]))
    );

    it('should work with infinite lists',
      () => assert.deepEqual([0, 1, 2], ƒ.takeWhile(x => x < 3, ƒ.cycle([0, 1, 2, 3, 4, 5])))
    );
  }
);

describe('ƒ.dropWhile()',
  () => {
    it('should return the suffix remaining after takeWhile(f, xs)',
      () => assert.deepEqual([3, 4, 5], ƒ.dropWhile(x => x < 3, [0, 1, 2, 3, 4, 5]))
    );

    it('should work with infinite lists',
      () => assert.deepEqual(3, ƒ.dropWhile(x => x < 3, ƒ.cycle([0, 1, 2, 3, 4, 5]))[0])
    );
  }
);

describe('ƒ.zip()',
  () => it('should form a list of n-ples from n arrays',
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
