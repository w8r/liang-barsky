(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.lbclip = factory());
}(this, (function () { 'use strict';

/**
 * @preserve
 * Fast, destructive implemetation of Liang-Barsky line clipping algorithm.
 * It clips a 2D segment by a rectangle.
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 */

var EPSILON = 1e-6;
var abs = Math.abs;
var INSIDE  = 1;
var OUTSIDE = 0;


function clipT(num, denom, c) {
  var tE = c[0];
  var tL = c[1];
  if (abs(denom) < EPSILON) { return num < 0; }
  var t = num / denom;

  if (denom > 0) {
    if (t > tL) { return 0; }
    if (t > tE) { c[0] = t; }
  } else {
    if (t < tE) { return 0; }
    if (t < tL) { c[1] = t; }
  }
  return 1;
}


/**
 * @param  {Array<number>} a
 * @param  {Array<number>} b
 * @param  {Array<number>} box [xmin, ymin, xmax, ymax]
 * @return {number}
 */
function clip(a, b, box) {
  var x1 = a[0];
  var y1 = a[1];
  var x2 = b[0];
  var y2 = b[1];
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (abs(dx) < EPSILON && abs(dy) < EPSILON &&
      x1 >= box[0] && x1 <= box[2] &&
      y1 >= box[1] && y1 <= box[3]) {
    return INSIDE;
  }

  var c = [0, 1];
  if (clipT(box[0] - x1,  dx, c) &&
      clipT(x1 - box[2], -dx, c) &&
      clipT(box[1] - y1,  dy, c) &&
      clipT(y1 - box[3], -dy, c)) {
    var tE = c[0];
    var tL = c[1];
    if (tL < 1) {
      b[0] = (x1 + tL * dx);
      b[1] = (y1 + tL * dy);
    }
    if (tE > 0) {
      a[0] += tE * dx;
      a[1] += tE * dy;
    }
    return INSIDE;
  }
  return OUTSIDE;
}

return clip;

})));
//# sourceMappingURL=liang-barsky.js.map
