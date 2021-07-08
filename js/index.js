'use strict';

const canvasRings = document.getElementById('canvas-rings'),
  ctxRings = canvasRings.getContext('2d');

const angle = (degrees) => (Math.PI / 180) * degrees;
ctxRings.beginPath();
ctxRings.moveTo(110, 149);
ctxRings.lineWidth = '10';
ctxRings.strokeStyle = 'blue';
ctxRings.arc(100, 100, 50, 1.5, 0.9, false);
ctxRings.stroke();

ctxRings.beginPath();
ctxRings.moveTo(140, 110);
ctxRings.lineWidth = '10';
ctxRings.strokeStyle = 'yellow';
ctxRings.arc(170, 150, 50, 4.1, 4.5, true);
ctxRings.stroke();

ctxRings.beginPath();
ctxRings.moveTo(170, 110);
ctxRings.lineWidth = '10';
ctxRings.strokeStyle = 'black';
ctxRings.arc(220, 100, 50, 2.9, 3.3, true);
ctxRings.stroke();

ctxRings.beginPath();
ctxRings.moveTo(261, 108);
ctxRings.lineWidth = '10';
ctxRings.strokeStyle = 'green';
ctxRings.arc(290, 150, 50, 3.8, 4.5, true);
ctxRings.stroke();

ctxRings.beginPath();
ctxRings.moveTo(293, 110);
ctxRings.lineWidth = '10';
ctxRings.strokeStyle = 'red';
ctxRings.arc(340, 100, 50, 2.9, 3.3, true);
ctxRings.stroke();

const canvasPaint = document.getElementById('canvas-paint'),
  ctxPaint = canvasPaint.getContext('2d'),
  color = document.getElementById('color'),
  width = document.getElementById('width');

color.addEventListener('input', () => ctxPaint.strokeStyle = color.value);
width.addEventListener('change', () => ctxPaint.lineWidth = width.value);

canvasPaint.addEventListener('mousemove', (evt) => {
  const x = evt.offsetX,
    y = evt.offsetY,
    mx = evt.movementX,
    my = evt.movementY;

  if (evt.buttons > 0) {
    ctxPaint.beginPath();
    ctxPaint.moveTo(x, y);
    ctxPaint.lineTo(x - mx, y - my);
    ctxPaint.stroke();
    ctxPaint.closePath();
  }
})