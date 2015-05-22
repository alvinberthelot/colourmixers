/**
 * @class preloader
 * A Phaser scene
 */
var game = require('../game');

module.exports = {

  preload: function () {

    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    
    // load other assets here
    this.loadResources();
  },

  loadResources: function () {
    this.load.image('colourBlue', 'assets/cm_blue.png');
    this.load.image('colourRed', 'assets/cm_red.png');
    this.load.image('colourYellow', 'assets/cm_yellow.png');
    this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');

    this.load.audio('sound1', 'assets/sounds/sound1.ogg');
  },

  create: function () {

    this.asset.cropEnabled = false;
  },

  update: function () {

    if (!!this.ready) {
      game.state.start('mainMenu', true, false);
    }
  },

  onLoadComplete: function () {

    this.ready = true;
  }

};
