/**
 * @class Balloon
 * An extention to the text class, that adds some default styling
 *
 */

/**
 * @constructor
 *
 * @param x {Number} Horizontal position
 * @param y {Number} Verticle position
 * @param colour {String} Colour Balloon
 * @param visible {Boolean} Visibilty
 */
var Balloon = function (config) {

  var colours = [
    // red
    '0xFF0000',
    // green
    // '0x00FF00',
    // blue
    '0x0000FF',
    // yellow
    '0xFFFF00'
    // magenta
    // '0xFF00FF',
    // cyan
    // '0x00FFFF',
    // white
    // '0xFFFFFF'
  ];


  var o = {};
  o.x = Math.floor(Math.random() * config.maxX);
  o.y = Math.floor(Math.random() * config.maxY);
  o.time = config.time;
  o.graphics = config.graphics;


  // 
  var randomColour = Math.floor(Math.random() * colours.length);
  o.colour = colours[randomColour];


  o.visibility = true;



  return o;
};

module.exports = Balloon;