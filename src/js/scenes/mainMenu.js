/**
 * @class mainMenu
 * A Phaser scene
 */
var game = require('../game'),
  localisation = require('../locale');

module.exports = {

  create: function () {

    // set the background colour
    // game.stage.backgroundColor = '#4488cc';
    
    var x = game.width / 2,
      y = game.height / 2;

    this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', localisation[game.language].mainMenu.labelTitle );
    this.titleTxt.align = 'center';
    this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;

    y = y + this.titleTxt.height + 5;
    this.startTxt = this.add.bitmapText(x, y, 'minecraftia', localisation[game.language].mainMenu.labelStart);
    this.startTxt.align = 'center';
    this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;

    this.input.onDown.add(this.onDown, this);
  },

  onDown: function () {
    // go to the main game scene
    game.state.start('mainGame', true, false);
  }

};
