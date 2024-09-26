# Liang-Barsky line-clipping algorithm [![npm](https://badge.fury.io/js/liang-barsky.svg)](https://www.npmjs.com/package/liang-barsky)

![Preview](https://w8r.github.io/liang-barsky/thumbnail.png)

Fast, _destructive_ implemetation of [Liang-Barsky line clipping algorithm](https://en.wikipedia.org/wiki/Liang%E2%80%93Barsky_algorithm). It clips a 2D segment by a rectangle.

This is an adaptation of the [C++ code](http://hinjang.com/articles/04.html#eight)
that impressed me by its simplicity.

## API

Destructive

```js
const a = [-10, -10],
  b = [10, 10];
clip(a, b, [-5, -5, 5, 5]); // returns 1 - "clipped"
console.log(a); // [-5, -5]
console.log(b); // [5, 5]
```

Non-destructive

```js
const a = [-10, -10],
  b = [10, 10];
const an = a.slice(),
  bn = b.slice();
clip(a, b, [-5, -5, 5, 5], an, bn); // returns 1 - "clipped"
console.log(an); // [-5, -5]
console.log(bn); // [5, 5]
console.log(a); // [-10, -10]
console.log(b); // [10, 10]
```

Return value is `1` if the line was clipped, and `0` if it lies completely
outside of the provided bounding box.

## Install

```
npm install -S liang-barsky
```

```js
import { clip } from 'liang-barsky';
// or
var clip = require('liang-barsky');
```

Or just drop-in the file

```html
<script src="path/to/liang-barsky.umd.js"></script>
<script>
  liangBarsky.clip([0, 0], [10, 10], [0, 0, 5, 5]);
</script>
```

## Performance

I ran a check against the Cohen-Sutherland algorithm implemented by @mourner
for clipping just one segment. Though test include memory allocation, they are
fair for the task at hand, since you can use the results in an equal manner after
the invocation of the clipper.

```
npm run benchmark
```

```
liang-barsky x 112,058,856 ops/sec ±6.46% (87 runs sampled)
mapbox/lineclip x 27,754,592 ops/sec ±1.94% (98 runs sampled)
- Fastest is liang-barsky
```

## Future plan

Implement a sub-routine for polylines. Loop through pairs, tracking in-out
transitions.

## License

MIT
