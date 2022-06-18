class GameScene extends Phaser.Scene{
    constructor(){
	super({key: 'scene-game'});
    }
    create(){
	this.floor = this.add.tileSprite(1, 1, 8000, 6000, 'floor').setScale(0.3);

	for(let i = 0; i < 1; i++){

	    let worker = this.add.sprite(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'manSouth').setScale(4);
	    worker.play('manSouthAnim');
	    worker.walk = [Phaser.Math.Between(-1, 1), Phaser.Math.Between(-1, 1)];
	    workers[i] = worker;
	    console.log(workers[i].walk);
	}

	this.time.addEvent({
	    delay: 2500,
	    callback: () => {workers[0].walk = [Phaser.Math.Between(-1, 1), Phaser.Math.Between(-1, 1)]},
	    callbackScope: this,
	    loop: true
	});

    }

    update(){
	workers[0].x += workers[0].walk[0];
	workers[0].y += workers[0].walk[1];
    }
}
var workers = [];

/*
function myEvent(sprite){
    sprite.walk = [Phaser.Math.Between(-2, 2), Phaser.Math.Between(-2, 2)];
    console.log(sprite.walk);
    }
    */

export default GameScene;
