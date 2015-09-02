'use strict';

var { tileSize } = require('../../constants');
var { context } = require('../../utils');


var variants = [
  '#f2f6fa',
  '#fafaf7',
  '#f0f1f5',
  '#fafafa',
  '#f2f3f7',
];

module.exports = function drawFloor(drawX, drawY, data, x, y) {
  var which = (x + y * 2) % 5;

  context.fillStyle = variants[which];
  context.fillRect(drawX, drawY, tileSize, tileSize);
};