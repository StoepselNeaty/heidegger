import BootScene from './scenes/BootScene.js';
import GameScene from './scenes/GameScene.js';

console.log(document.getElementById('game-canvas'));

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
	default: 'arcade',
	arcade: {
	    debug: true
	},
    },
   scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);
