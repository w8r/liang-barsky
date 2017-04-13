# Liang-barsky line-clipping algorithm

Fast, *destructive* implemetation of [Liang-Barsky line clipping algorithm](https://en.wikipedia.org/wiki/Liang%E2%80%93Barsky_algorithm). It clips a 2D segment by a rectangle.

This is an adaptation of the [C++ code](http://hinjang.com/articles/04.html#eight)
that impressed me by its simplicity.

## API

Destructive

```js
var a = [-10, -10], b = [10, 10];
clip(a, b, [-5, -5, 5, 5]); // returns 1 - "clipped"
console.log(a);             // [-5, -5]
console.log(b);             // [5, 5]

```

Non-destructive
```js
var a  = [-10, -10], b  = [10, 10];
var an = a.slice(),  bn = b.slice();
clip(an, bn, [-5, -5, 5, 5]); // returns 1 - "clipped"
console.log(an);              // [-5, -5]
console.log(bn);              // [5, 5]
console.log(a);               // [-10, -10]
console.log(b);               // [10, 10]
```

## Install

```
npm install -S liang-barsky
```

```js
import clip from 'liang-barsky';
// or
var clip = require('liang-barsky');
```

Or just drop-in the file
```html
<script src="path/to/liang-barsky.umd.js"></script>
<script>
  lbclip([0, 0], [10, 10], [0, 0, 5, 5]);
</script>
```

## Performance

```
npm run benchmark
```

```
liang-barsky x 27,728,288 ops/sec ±1.50% (88 runs sampled)
[1]+  Done                    node tests/benchmark.js

```

## Future plan

Implement a sub-routine for polylines. Loop through pairs, tracking in-out
transitions.

## License

MIT
