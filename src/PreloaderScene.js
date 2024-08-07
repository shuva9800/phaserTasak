// import Phaser from 'phaser';

// class PreloaderScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'PreloaderScene' });
//     }

//     preload() {
//         // Display loading text
//         this.loadingText = this.add.text(400, 300, 'Loading...', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

//         let progressBar = this.add.graphics();
//         let progressBox = this.add.graphics();
//         progressBox.fillStyle(0x222222, 0.8);
//         progressBox.fillRect(240, 270, 320, 50);

//         this.load.on('progress', (value) => {
//             progressBar.clear();
//             progressBar.fillStyle(0xffffff, 1);
//             progressBar.fillRect(250, 280, 300 * value, 30);
//         });

//         this.load.on('complete', () => {
//             progressBar.destroy();
//             progressBox.destroy();
//             this.loadingText.destroy();
//         });

//         // Load assets 
//         this.load.image('phaserLogo', 'assets/arrow-right.svg');
//         this.load.audio('clickSound', 'assets/click.mp3.wav');
//     }

//     create() {
//         this.scene.start('MainScene');
//     }
// }

// export default PreloaderScene;

// import Phaser from 'phaser';

// class PreloaderScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'PreloaderScene' });
//     }
//     preload() {
//         this.load.image('logo', 'assets/logo.jpg');
//         this.load.audio('click', 'assets/click.mp3.wav');

//         let progressBar = this.add.graphics();
//         let progressBox = this.add.graphics();
//         progressBox.fillStyle(0x222222, 0.8);
//         progressBox.fillRect(240, 270, 320, 50);

//         let width = this.cameras.main.width;
//         let height = this.cameras.main.height;
//         let loadingText = this.make.text({
//             x: width / 2,
//             y: height / 2 - 50,
//             text: 'Loading...',
//             style: {
//                 font: '20px monospace',
//                 fill: '#ffffff'
//             }
//         });
//         loadingText.setOrigin(0.5, 0.5);

//         let percentText = this.make.text({
//             x: width / 2,
//             y: height / 2 - 5,
//             text: '0%',
//             style: {
//                 font: '18px monospace',
//                 fill: '#ffffff'
//             }
//         });
//         percentText.setOrigin(0.5, 0.5);

//         this.load.on('progress', (value) => {
//             percentText.setText(parseInt(value * 100) + '%');
//             progressBar.clear();
//             progressBar.fillStyle(0xffffff, 1);
//             progressBar.fillRect(250, 280, 300 * value, 30);
//         });

//         this.load.on('complete', () => {
//             progressBar.destroy();
//             progressBox.destroy();
//             loadingText.destroy();
//             percentText.destroy();
//         });
//     }

//     create() {
//         this.scene.start('MainScene');
//     }
// }

// export default PreloaderScene;

// import Phaser from 'phaser';

// class PreloaderScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'PreloaderScene' });
//     }

//     preload() {
//         this.load.image('background', 'assets/background.jpg.jpg');
//         this.load.image('logo', 'assets/arrow-right.svg');

//         let progressBar = this.add.graphics();
//         let progressBox = this.add.graphics();
//         progressBox.fillStyle(0x222222, 0.8);
//         progressBox.fillRect(240, 270, 320, 50);

//         let width = this.cameras.main.width;
//         let height = this.cameras.main.height;
//         let loadingText = this.make.text({
//             x: width / 2,
//             y: height / 2 - 50,
//             text: 'Loading...',
//             style: {
//                 font: '20px monospace',
//                 fill: '#ffffff'
//             }
//         });
//         loadingText.setOrigin(0.5, 0.5);

//         let percentText = this.make.text({
//             x: width / 2,
//             y: height / 2 - 5,
//             text: '0%',
//             style: {
//                 font: '18px monospace',
//                 fill: '#ffffff'
//             }
//         });
//         percentText.setOrigin(0.5, 0.5);

//         this.load.on('progress', (value) => {
//             percentText.setText(parseInt(value * 100) + '%');
//             progressBar.clear();
//             progressBar.fillStyle(0xffffff, 1);
//             progressBar.fillRect(250, 280, 300 * value, 30);
//         });

//         this.load.on('complete', () => {
//             progressBar.destroy();
//             progressBox.destroy();
//             loadingText.destroy();
//             percentText.destroy();
//         });
//     }

//     create() {
//         this.scene.start('MainScene');
//     }
// }

// export default PreloaderScene;



import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloaderScene' });
    }

    preload() {
        this.load.image('person', 'assets/tom.svg');
    }

    create() {
        this.scene.start('MainScene');
    }
}

export default PreloaderScene;

