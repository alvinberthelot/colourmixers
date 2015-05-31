/**
 * @class mainGame
 * A Phaser scene
 */
var Phaser = require('phaser'),
  game = require('../game'),
  Balloon = require('../classes/Balloon'),
  localisation = require('../locale');

module.exports = {

  create: function () {


    // this.labels = initLabels();


    var x = game.width / 2,
        y = game.height / 2;
    this.txtMain = this.add.bitmapText(x, y, 'minecraftia');
    this.txtMain.align = 'center';




    this.gameInterrupted = false;

    this.scoreBlue = 0;
    this.scoreRed = 0;
    this.scoreYellow = 0;

    this.scoreLife = 3;

    this.sound1 = game.add.audio('sound1');


    this.timeOnPause = 0;
    this.timeCheck = game.time.now;
    this.timeAction = 3000;
    this.timeBalloon = this.timeAction / 2;

    this.balloons = [];

    var that = this;

    game.input.keyboard.onUpCallback = function(e) {

      if(e.keyCode === Phaser.Keyboard.LEFT) {

        that.sound1.play();

        for (var i = that.balloons.length - 1; i >= 0; i--) {
          var balloon = that.balloons[i];
          if (balloon.colour === '0xFF0000') {
            balloon.graphics.clear();
            that.balloons.splice(i, 1);
            that.scoreRed++;
          }
        }
      }

      if(e.keyCode === Phaser.Keyboard.RIGHT) {

        that.sound1.play();

        for (var i = that.balloons.length - 1; i >= 0; i--) {
          var balloon = that.balloons[i];
          if (balloon.colour === '0xFFFF00') {
            balloon.graphics.clear();
            that.balloons.splice(i, 1);
            that.scoreYellow++;
          }
        }
      }

      if(e.keyCode === Phaser.Keyboard.SPACEBAR) {
        that.gameInterrupted ? that.onResume() : that.onPause();
      }
    };

    game.input.mouse.onMouseDown = function (e) {

      that.sound1.play();

      for (var i = that.balloons.length - 1; i >= 0; i--) {
        var balloon = that.balloons[i];
        if (balloon.colour === '0x0000FF') {
          balloon.graphics.clear();
          that.balloons.splice(i, 1);
          that.scoreBlue++;
        }
      }
    };

    this.txtScoreLife = this.add.text(10, 10, localisation[game.language].mainGame.labelScore + this.scoreLife, { fontSize: '32px', fill: '#fff' });

  },

  update: function () {

    // Game interrupted
    if (this.gameInterrupted) {

    } else {
      // Game in progress
      if (this.scoreLife > 0) {

        var timeNow = game.time.now;

        if (timeNow - this.timeCheck > this.timeBalloon) {
          this.timeCheck = timeNow;

          var graphicsBalloon = game.add.graphics(0, 0);
          var balloon = Balloon({
            maxX: game.width,
            maxY: game.height,
            time: timeNow,
            graphics: graphicsBalloon
          });

          graphicsBalloon.beginFill(balloon.colour, 1);
          graphicsBalloon.drawCircle(balloon.x, balloon.y, 100);

          this.balloons.push(balloon);
        }


        for (var i = this.balloons.length - 1; i >= 0; i--) {
          var balloon = this.balloons[i];
          if (timeNow - balloon.time > this.timeAction) {
            balloon.graphics.clear();
            this.balloons.splice(i, 1);
            this.scoreLife--;
            this.txtScoreLife.text = localisation[game.language].mainGame.labelScore + this.scoreLife;
          }
        };
      }
      // Game over
      else {

        this.gameInterrupted = true;

        this.showMainText(localisation[game.language].mainGame.labelGameOver);
      }
    }

  },

  showMainText: function (text) {

    this.txtMain.text = text;
    // FIXME : position horizontale à revoir
    this.txtMain.x = this.game.width / 2 - this.txtMain.textWidth / 2;
  },  

  onPause: function () {

    this.gameInterrupted = true;

    var timeNow = game.time.now;
    // Save moment when the game is on pause
    this.timeOnPause = timeNow;

    this.showMainText(localisation[game.language].mainGame.labelPause);
  },

  onResume: function () {
    
    this.showMainText('');

    var timeNow = game.time.now;
    // Calculate duration pause
    var timeDeltaPause = timeNow - this.timeOnPause;
    // Increase ballon time
    for (var i = this.balloons.length - 1; i >= 0; i--) {
      var balloon = this.balloons[i];
      balloon.time += timeDeltaPause;
    };
    // 
    this.timeCheck += timeDeltaPause;

    this.gameInterrupted = false;
  },

  increaseYellow: function () {
    this.scoreYellow++;
    this.scoreTextYellow.text = localisation[game.language].mainGame.labelScore + this.scoreYellow;
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
