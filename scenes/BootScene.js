class BootScene extends Phaser.Scene {
    constructor(){
	super({key: 'scene-boot'});
    }

    preload(){
	this.load.image('floor', 'assets/wooden_floor_1.png');
	this.load.image('manNorth', 'assets/man_north.png');
	//this.load.image('manSouth', 'assets/man_south.png');
	this.load.image('manWest', 'assets/man_west.png');
	this.load.image('manEast', 'assets/man_east.png');
	this.load.image('coffee', 'assets/coffee_machine.png');
	this.load.spritesheet('manSouth', 'assets/manSouth_spriteMap16x20.png', {frameWidth: 16, frameHeight: 20, endframe: 4});
    }
    
    create(){
	var manSouthAnimConfig = {
	    key: 'manSouthAnim',
	    frameRate: 3,
	    frames: this.anims.generateFrameNumbers('manSouth', {start: 0, end: 4}),
	    repeat: -1
	};
	this.anims.create(manSouthAnimConfig);
	
	this.scene.start('scene-game');
    }
}
export default BootScene;

// https://photonstorm.github.io/phaser3-docs/Phaser.Types.Scenes.html#.SettingsConfig
