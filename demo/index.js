var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;
var canvas = document.createElement('canvas');
var ctx    = canvas.getContext('2d');
document.body.appendChild(canvas);

var pxRatio = window.devicePixelRatio;

var W = w * pxRatio;
var H = h * pxRatio;

canvas.width        = W;
canvas.height       = H;
canvas.style.width  = w + 'px';
canvas.style.height = h + 'px';

ctx.translate(W / 2, H / 2);

var bounds = [-W / 2, -H / 2 , W / 2, H / 2];
var box    = [-W / 5, -H / 5,  W / 5, H / 5];

var s = [], e = [], i, a, b, inside;
ctx.strokeStyle = '#aaaaaa';
ctx.lineWidth = 1;
ctx.beginPath();

for (i = 0; i < 200; i++) {
  a = [
    bounds[0] + (bounds[2] - bounds[0]) * Math.random(),
    bounds[1] + (bounds[3] - bounds[1]) * Math.random(),
  ];

  b = [
    bounds[0] + (bounds[2] - bounds[0]) * Math.random(),
    bounds[1] + (bounds[3] - bounds[1]) * Math.random(),
  ];

  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.stroke();
  s.push(a);
  e.push(b);
}
ctx.closePath();


ctx.lineWidth = 2;
ctx.strokeStyle = '#ff0055';
ctx.beginPath();
for (i = 0; i < 200; i++) {
  a = s[i];
  b = e[i];
  if (lbclip(a, b, box)) {
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  }
}


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = '#000000';
ctx.moveTo(box[0], box[1]);
ctx.rect(box[0], box[1], box[2] - box[0], box[3] - box[1]);
ctx.stroke();
