import Phaser from 'phaser';

class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseScene' });
    }

    create() {
        this.add.text(300, 200, 'Paused', { fontSize: '32px', fill: '#fff' });

      
        this.input.keyboard.on('keydown-R', () => {
            this.scene.stop();
            this.scene.resume('MainScene');
        });

        this.input.keyboard.on('keydown-B', () => {
            this.scene.stop();
            this.scene.start('MainScene');
        });
    }
}

export default PauseScene;
