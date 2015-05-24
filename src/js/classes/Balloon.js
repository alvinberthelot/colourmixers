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

  var o = {};
  o.x = config.x;
  o.y = config.y;
  o.colour = config.colour;
  o.visibility = config.visibility;

  return o;
};

module.exports = Balloon;