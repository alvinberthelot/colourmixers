/**
 * @class mainGame
 * A Phaser scene
 */
var Phaser = require('phaser'),
  game = require('../game'),
  localisation = require('../locale');

module.exports = {

  create: function () {

    this.scoreBlue = 0;
    this.scoreRed = 0;
    this.scoreYellow = 0;

    this.sound1 = game.add.audio('sound1');

    var x = 20/*this.game.width / 2*/,
      y = this.game.height / 4;

    this.colourBlue = this.add.sprite(x, y, 'colourBlue');
    this.scoreTextBlue = this.add.text(x + 100, y, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });

    this.colourRed = this.add.sprite(x, y * 2, 'colourRed');
    this.scoreTextRed = this.add.text(x + 100, y * 2, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });

    this.colourYellow = this.add.sprite(x, y * 3, 'colourYellow');
    this.scoreTextYellow = this.add.text(x + 100, y * 3, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });

    game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    var spaceBarKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.add(this.increaseBlue, this);

    this.gamepad = game.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.onInputDown, this);



    // game.stage.backgroundColor = '#fff';

    // this.labelTitle = new Label(game.width * 0.5, game.height * 0.5, localisation[game.language].mainGame.labelTitle);
    // game.add.existing(this.labelTitle);

  },

  update: function () {

    if (this.gamepad.left.isDown) {
        this.scoreRed++;
        this.scoreTextRed.text = localisation[game.language].mainGame.labelScore + this.scoreRed;
    } else if (this.gamepad.right.isDown) {
        this.scoreYellow++;
        this.scoreTextYellow.text = localisation[game.language].mainGame.labelScore + this.scoreYellow;

        this.sound1.play();
    }

  },

  increaseBlue: function () {
    this.scoreBlue++;
    this.scoreTextBlue.text = localisation[game.language].mainGame.labelScore + this.scoreBlue;
  },

  onInputDown: function () {
    this.game.state.start('menu');
  },

  restartGame: function () {

    game.state.start('mainMenu');
  }

};
