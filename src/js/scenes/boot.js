/**
 * @class boot
 * A Phaser scene
 */
var Phaser = require('phaser'),
  game = require('../game');

module.exports = {

  preload: function () {
    this.load.image('preloader', 'assets/preloader.gif');
  },

  create: function () {

    // max number of fingers to detect
    this.input.maxPointers = 1;

    // auto pause if window looses focus
    this.stage.disableVisibilityChange = true;

    if (game.device.desktop) {
      this.stage.scale.pageAlignHorizontally = true;
    }
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();

    game.state.start('preloader', true, false);
  }

};
