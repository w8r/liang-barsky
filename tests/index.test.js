import { describe, it } from 'mocha';
import { assert }       from 'chai';

import clip from '../src/index';


describe('Liang-Barsky line clipper', () => {

  const box = [-5, -5, 5, 5];

  describe ('diagonal', () => {

    var a = [-10, -10], b = [10, 10];

    it ('clip', () => {
      const a = [0, 0];
      const b = [20, 10];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [5, 2.5]);
    });

    it ('in', () => {
      const a = [0, 0];
      const b = [3, 3];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [3, 3]);
    });


    it ('out', () => {
      const a = [6, 0];
      const b = [20, 10];
      assert.equal(clip(a, b, box), 0);
      assert.deepEqual(a, [6, 0]);
      assert.deepEqual(b, [20, 10]);
    });


    it ('on', () => {
      const a = [5, 0];
      const b = [20, 10];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [5, 0]);
      assert.deepEqual(b, [5, 0]);
    });

  });

  describe ('vertical', () => {

    it ('crossing', () => {
      const a = [0, 0];
      const b = [0, 10];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [0, 5]);
    });

    it ('in', () => {
      const a = [0, 0];
      const b = [0, 2];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [0, 2]);
    });

    it ('out', () => {
      const a = [0, 6];
      const b = [0, 10];
      assert.equal(clip(a, b, box), 0);
      assert.deepEqual(a, [0, 6]);
      assert.deepEqual(b, [0, 10]);
    });

    it ('on', () => {
      const a = [0, 5];
      const b = [0, 10];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 5]);
      assert.deepEqual(b, [0, 5]);
    });

  });

  describe ('horizontal', () => {

    it ('crossing', () => {
      const a = [0, 0];
      const b = [10, 0];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [5, 0]);
    });

    it ('in', () => {
      const a = [0, 0];
      const b = [3, 0];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [0, 0]);
      assert.deepEqual(b, [3, 0]);
    });

    it ('out', () => {
      const a = [6, 0];
      const b = [10, 0];
      assert.equal(clip(a, b, box), 0);
      assert.deepEqual(a, [6,  0]);
      assert.deepEqual(b, [10, 0]);
    });

    it ('on', () => {
      const a = [5, 0];
      const b = [10, 0];
      assert.equal(clip(a, b, box), 1);
      assert.deepEqual(a, [5, 0]);
      assert.deepEqual(b, [5, 0]);
    });

  });

  describe('non-destructive', () => {

    it ('clip', () => {
      const a = [0, 0];
      const b = [20, 10];
      const ar = a.slice(),
            br = b.slice();
      const c = [0,0],
            d = [0,0];

      assert.equal(clip(a, b, box, c, d), 1);

      assert.deepEqual(a, ar);
      assert.deepEqual(b, br);

      assert.deepEqual(c, [0, 0]);
      assert.deepEqual(d, [5, 2.5]);
    });

    it ('in', () => {
      const a = [0, 0];
      const b = [3, 3];
      const ar = a.slice(),
            br = b.slice();
      const c = [0,0],
            d = [0,0];

      assert.equal(clip(a, b, box, c, d), 1);

      assert.deepEqual(a, ar);
      assert.deepEqual(b, br);

      assert.deepEqual(c, [0, 0]);
      assert.deepEqual(d, [3, 3]);

    });


    it ('out', () => {
      const a = [6, 0];
      const b = [20, 10];
      const ar = a.slice(),
            br = b.slice();
      const c = [0,0],
            d = [0,0];

      assert.equal(clip(a, b, box, c, d), 0);

      assert.deepEqual(a, ar);
      assert.deepEqual(b, br);
    });


    it ('on', () => {
      const a = [5, 0];
      const b = [20, 10];
      const ar = a.slice(),
            br = b.slice();
      const c = [0,0],
            d = [0,0];

      assert.equal(clip(a, b, box, c, d), 1);
      assert.deepEqual(a, ar);
      assert.deepEqual(b, br);
    });

  });

});
