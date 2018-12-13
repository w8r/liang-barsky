/**
 * @preserve
 * Fast, destructive implemetation of Liang-Barsky line clipping algorithm.
 * It clips a 2D segment by a rectangle.
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 */
declare type Point = Array<number>;
declare type BoundingBox = Array<number>;
/**
 * @param  {Array<number>} a
 * @param  {Array<number>} b
 * @param  {Array<number>} box [xmin, ymin, xmax, ymax]
 * @param  {Array<number>} [da]
 * @param  {Array<number>} [db]
 * @return {number}
 */
export default function clip(a: Point, b: Point, box: BoundingBox, da?: Point, db?: Point): 1 | 0;
export {};
