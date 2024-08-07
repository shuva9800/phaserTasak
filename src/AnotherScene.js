import Phaser from 'phaser';

class AnotherScene extends Phaser.Scene {
    constructor() {
        super({ key: 'AnotherScene' });
    }

    preload() {
        this.load.image('person', 'assets/images/person.png');
    }

    create() {
        this.add.text(300, 200, 'Another Scene', { fontSize: '32px', fill: '#fff' });

        // Return to MainScene
        this.input.keyboard.on('keydown-B', () => {
            this.scene.start('MainScene');
        });
    }
}

export default AnotherScene;
