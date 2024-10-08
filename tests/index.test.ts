import { clip, Point, BoundingBox } from '../src';
import { describe, it, expect } from 'vitest';

describe('Liang-Barsky line clipper', () => {
  const box: BoundingBox = [-5, -5, 5, 5];

  describe('diagonal', () => {
    const a: Point = [-10, -10],
      b: Point = [10, 10];

    it('clip', () => {
      const a: Point = [0, 0];
      const b: Point = [20, 10];

      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([5, 2.5]);
    });

    it('in', () => {
      const a: Point = [0, 0];
      const b: Point = [3, 3];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([3, 3]);
    });

    it('out', () => {
      const a: Point = [6, 0];
      const b: Point = [20, 10];
      expect(clip(a, b, box)).toEqual(0);
      expect(a).toEqual([6, 0]);
      expect(b).toEqual([20, 10]);
    });

    it('on', () => {
      const a: Point = [5, 0];
      const b: Point = [20, 10];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([5, 0]);
      expect(b).toEqual([5, 0]);
    });
  });

  describe('vertical', () => {
    it('crossing', () => {
      const a: Point = [0, 0];
      const b: Point = [0, 10];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([0, 5]);
    });

    it('in', () => {
      const a: Point = [0, 0];
      const b: Point = [0, 2];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([0, 2]);
    });

    it('out', () => {
      const a: Point = [0, 6];
      const b: Point = [0, 10];
      expect(clip(a, b, box)).toEqual(0);
      expect(a).toEqual([0, 6]);
      expect(b).toEqual([0, 10]);
    });

    it('on', () => {
      const a: Point = [0, 5];
      const b: Point = [0, 10];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 5]);
      expect(b).toEqual([0, 5]);
    });
  });

  describe('horizontal', () => {
    it('crossing', () => {
      const a: Point = [0, 0];
      const b: Point = [10, 0];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([5, 0]);
    });

    it('in', () => {
      const a: Point = [0, 0];
      const b: Point = [3, 0];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([0, 0]);
      expect(b).toEqual([3, 0]);
    });

    it('out', () => {
      const a: Point = [6, 0];
      const b: Point = [10, 0];
      expect(clip(a, b, box)).toEqual(0);
      expect(a).toEqual([6, 0]);
      expect(b).toEqual([10, 0]);
    });

    it('on', () => {
      const a: Point = [5, 0];
      const b: Point = [10, 0];
      expect(clip(a, b, box)).toEqual(1);
      expect(a).toEqual([5, 0]);
      expect(b).toEqual([5, 0]);
    });
  });

  describe('non-destructive', () => {
    it('clip', () => {
      const a: Point = [0, 0];
      const b: Point = [20, 10];
      const ar = a.slice(),
        br = b.slice();
      const c: Point = [0, 0],
        d: Point = [0, 0];

      expect(clip(a, b, box, c, d)).toEqual(1);

      expect(a).toEqual(ar);
      expect(b).toEqual(br);

      expect(c).toEqual([0, 0]);
      expect(d).toEqual([5, 2.5]);
    });

    it('in', () => {
      const a: Point = [0, 0];
      const b: Point = [3, 3];
      const ar = a.slice(),
        br = b.slice();
      const c: Point = [0, 0],
        d: Point = [0, 0];

      expect(clip(a, b, box, c, d)).toEqual(1);

      expect(a).toEqual(ar);
      expect(b).toEqual(br);

      expect(c).toEqual([0, 0]);
      expect(d).toEqual([3, 3]);
    });

    it('out', () => {
      const a: Point = [6, 0];
      const b: Point = [20, 10];
      const ar = a.slice(),
        br = b.slice();
      const c: Point = [0, 0],
        d: Point = [0, 0];

      expect(clip(a, b, box, c, d)).toEqual(0);

      expect(a).toEqual(ar);
      expect(b).toEqual(br);
    });

    it('on', () => {
      const a: Point = [5, 0];
      const b: Point = [20, 10];
      const ar = a.slice(),
        br = b.slice();
      const c: Point = [0, 0],
        d: Point = [0, 0];

      expect(clip(a, b, box, c, d)).toEqual(1);
      expect(a).toEqual(ar);
      expect(b).toEqual(br);
    });
  });
});
