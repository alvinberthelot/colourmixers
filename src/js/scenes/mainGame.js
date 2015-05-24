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


    this.scoreBlue = 0;
    this.scoreRed = 0;
    this.scoreYellow = 0;

    this.sound1 = game.add.audio('sound1');


    this.colours = [
      '0xFF0000',
      '0x00FF00',
      '0x0000FF',
      '0xFFFF00',
      '0xFF00FF',
      '0x00FFFF',
      '0xFFFFFF'
    ];
    this.graphicRound = game.add.graphics(0, 0);
    this.graphicRound.show = false;
    // this.graphicRoundDelay = 0;

    var soundTest = game.add.audio('sound1');


    this.balloon = Balloon({
      x: 300,
      y: 500,
      colour: '0xFF0000',
      // Math.floor(Math.random() * (max - min)) + min;
      visibility: false
    });

    var that = this;

    game.input.keyboard.onUpCallback = function(e) {


      if(e.keyCode === Phaser.Keyboard.RIGHT) {
        soundTest.play();

        if (!that.balloon.visibility) {
          that.balloon.visibility = true;
        } else {
          var random = Math.floor(Math.random() * that.colours.length);


          console.log('RANDOM : ' + random);

          that.balloon.visibility = false;
          that.balloon.colour = that.colours[random];
        }
      }
    };





    // var x = 20/*this.game.width / 2*/,
    //   y = this.game.height / 4;

    // this.colourBlue = this.add.sprite(x, y, 'colourBlue');
    // this.scoreTextBlue = this.add.text(x + 100, y, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });

    // this.colourRed = this.add.sprite(x, y * 2, 'colourRed');
    // this.scoreTextRed = this.add.text(x + 100, y * 2, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });

    // this.colourYellow = this.add.sprite(x, y * 3, 'colourYellow');
    // this.scoreTextYellow = this.add.text(x + 100, y * 3, localisation[game.language].mainGame.labelScore + '0', { fontSize: '32px', fill: '#fff' });




    // game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    // var spaceBarKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    // spaceBarKey.onDown.add(this.increaseBlue, this);

    // // game.input.keyboard.addKeyCapture([Phaser.Keyboard.RIGHT]);
    // // var rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    // // rightKey.onDown.add(this.increaseYellow, this);

    // this.gamepad = game.input.keyboard.createCursorKeys();

    // this.input.onDown.add(this.onInputDown, this);



    // game.stage.backgroundColor = '#fff';

    // this.labelTitle = new Label(game.width * 0.5, game.height * 0.5, localisation[game.language].mainGame.labelTitle);
    // game.add.existing(this.labelTitle);

  },

  update: function () {

    if (this.balloon.visibility) {
      this.graphicRound.beginFill(this.balloon.colour, 1);
      this.graphicRound.drawCircle(this.balloon.x, this.balloon.y, 100); 
    } else {
      this.graphicRound.clear();
    }

    // graphics.lineStyle(2, 0xffd900, 1);



    // if (this.gamepad.left.isDown) {
    //     this.scoreRed++;
    //     this.scoreTextRed.text = localisation[game.language].mainGame.labelScore + this.scoreRed;
    // } else if (this.gamepad.right.isDown) {
    //     this.scoreYellow++;
    //     this.scoreTextYellow.text = localisation[game.language].mainGame.labelScore + this.scoreYellow;

    //     this.sound1.play();

    //     if (!this.graphicRound.show) {
    //       this.graphicRound.beginFill(this.colours[0], 1);
    //       this.graphicRound.drawCircle(300, 300, 100);
    //     } else {
    //       this.graphicRound.clear();
    //     }

    //     this.graphicRound.show = !this.graphicRound.show;
    // }

  },

  // actionColor: function(e) {

  //   if () {

  //   }
  // },

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
