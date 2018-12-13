"use strict";
/**
 * @preserve
 * Fast, destructive implemetation of Liang-Barsky line clipping algorithm.
 * It clips a 2D segment by a rectangle.
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EPSILON = 1e-6;
var INSIDE = 1;
var OUTSIDE = 0;
function clipT(num, denom, c) {
    var tE = c[0], tL = c[1];
    if (Math.abs(denom) < EPSILON)
        return num < 0;
    var t = num / denom;
    if (denom > 0) {
        if (t > tL)
            return 0;
        if (t > tE)
            c[0] = t;
    }
    else {
        if (t < tE)
            return 0;
        if (t < tL)
            c[1] = t;
    }
    return 1;
}
/**
 * @param  {Array<number>} a
 * @param  {Array<number>} b
 * @param  {Array<number>} box [xmin, ymin, xmax, ymax]
 * @param  {Array<number>} [da]
 * @param  {Array<number>} [db]
 * @return {number}
 */
function clip(a, b, box, da, db) {
    var x1 = a[0], y1 = a[1];
    var x2 = b[0], y2 = b[1];
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (da === undefined || db === undefined) {
        da = a;
        db = b;
    }
    else {
        da[0] = a[0];
        da[1] = a[1];
        db[0] = b[0];
        db[1] = b[1];
    }
    if (Math.abs(dx) < EPSILON && Math.abs(dy) < EPSILON &&
        x1 >= box[0] && x1 <= box[2] &&
        y1 >= box[1] && y1 <= box[3]) {
        return INSIDE;
    }
    var c = [0, 1];
    if (clipT(box[0] - x1, dx, c) &&
        clipT(x1 - box[2], -dx, c) &&
        clipT(box[1] - y1, dy, c) &&
        clipT(y1 - box[3], -dy, c)) {
        var tE = c[0], tL = c[1];
        if (tL < 1) {
            db[0] = (x1 + tL * dx);
            db[1] = (y1 + tL * dy);
        }
        if (tE > 0) {
            da[0] += tE * dx;
            da[1] += tE * dy;
        }
        return INSIDE;
    }
    return OUTSIDE;
}
exports.default = clip;
//# sourceMappingURL=liang-barsky.js.map