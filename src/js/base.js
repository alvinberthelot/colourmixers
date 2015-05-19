/**
 * @class base
 * This is the root file for the Phaser Boilerplate. All other files are included from this one.
 **/

var game = require('./game'),
  boot = require('./scenes/boot.js'),
  preloader = require('./scenes/preloader'),
  mainMenu = require('./scenes/mainMenu'),
  mainGame = require('./scenes/mainGame');

// set the default language
game.language = "fr";

// add add states
game.state.add('boot', boot, false);
game.state.add('preloader', preloader, false);
game.state.add('mainMenu', mainMenu, false);
game.state.add('mainGame', mainGame, false);

// kick off the game
game.state.start('boot');
