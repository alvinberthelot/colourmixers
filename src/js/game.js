(function() {
  'use strict';

  function Game() {

    this.colourBlue = null;
    this.scoreBlue = 0;
    this.scoreTextBlue = null;

    this.colourRed = null;
    this.scoreRed = 0;
    this.scoreTextRed = null;

    this.colourYellow = null;
    this.scoreYellow = 0;
    this.scoreTextYellow = null;

    this.gamepad = null;
  }

  Game.prototype = {

    create: function () {
      var x = 20/*this.game.width / 2*/
        , y = this.game.height / 4;

      this.colourBlue = this.add.sprite(x, y, 'colourBlue');
      this.scoreTextBlue = this.add.text(x + 100, y, 'score: 0', { fontSize: '32px', fill: '#fff' });

      this.colourRed = this.add.sprite(x, y * 2, 'colourRed');
      this.scoreTextRed = this.add.text(x + 100, y * 2, 'score: 0', { fontSize: '32px', fill: '#fff' });

      this.colourYellow = this.add.sprite(x, y * 3, 'colourYellow');
      this.scoreTextYellow = this.add.text(x + 100, y * 3, 'score: 0', { fontSize: '32px', fill: '#fff' });

      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

      var spaceBarKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      spaceBarKey.onDown.add(this.increaseBlue, this);

      this.gamepad = this.game.input.keyboard.createCursorKeys();

      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {

      if (this.gamepad.left.isDown) {
          this.scoreRed++;
          this.scoreTextRed.text = 'Score: ' + this.scoreRed;
      } else if (this.gamepad.right.isDown) {
          this.scoreYellow++;
          this.scoreTextYellow.text = 'Score: ' + this.scoreYellow;
      }

    },

    increaseBlue: function () {
      this.scoreBlue++;
      this.scoreTextBlue.text = 'Score: ' + this.scoreBlue;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['colourmixers'] = window['colourmixers'] || {};
  window['colourmixers'].Game = Game;

}());
