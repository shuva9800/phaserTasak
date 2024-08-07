// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainScene' });
//     }

//     create() {
//         this.add.text(400, 300, 'Main Scene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

//         // Add image amd sound
//         const logo = this.add.image(400, 200, 'phaserLogo');
//         logo.setInteractive();
//         logo.on('pointerdown', () => {
//             this.sound.play('clickSound');
//         });
//     }

  
// }

// export default MainScene;


// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainScene' });
//     }

//     create() {
//         // Add an image and make it interactive
//         const logo = this.add.image(400, 300, 'logo').setInteractive();

//         logo.on('pointerdown', () => {
//             this.sound.play('click');
//             this.tweens.add({
//                 targets: logo,
//                 scaleX: 1.5,
//                 scaleY: 1.5,
//                 duration: 300,
//                 yoyo: true
//             });
//         });

//         logo.on('pointerover', () => {
//             logo.setTint(0x44ff44);
//         });

//         logo.on('pointerout', () => {
//             logo.clearTint();
//         });

//         this.input.keyboard.on('keydown-SPACE', () => {
//             this.cameras.main.flash(500);
//         });
//     }
// }

// export default MainScene;


// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainScene' });
//     }

//     create() {
//         // Add a background image
//         this.add.image(400, 300, 'background');

//         // Add an interactive image
//         const logo = this.add.image(400, 300, 'logo').setInteractive();

//         // Camera controls
//         this.cameras.main.setBounds(0, 0, 1600, 1200);
//         this.cameras.main.setZoom(1);
//         this.cameras.main.centerOn(400, 300);

//         // Handle pointerdown event on the image
//         logo.on('pointerdown', () => {
//             this.cameras.main.shake(500);
//             this.cameras.main.zoomTo(2, 1000);
//         });

//         // Handle keyboard input for camera controls
//         this.input.keyboard.on('keydown-Z', () => {
//             this.cameras.main.zoomTo(1, 1000);
//         });

//         this.input.keyboard.on('keydown-P', () => {
//             this.cameras.main.pan(800, 600, 1000, 'Power2');
//         });

//         this.input.keyboard.on('keydown-R', () => {
//             this.cameras.main.rotateTo(Math.PI, 1000);
//         });

//         this.input.keyboard.on('keydown-F', () => {
//             if (this.scale.isFullscreen) {
//                 this.scale.stopFullscreen();
//             } else {
//                 this.scale.startFullscreen();
//             }
//         });

//         // Add a moving ball to demonstrate camera panning
//         this.ball = this.add.circle(400, 300, 15, 0xff0000);
//         this.tweens.add({
//             targets: this.ball,
//             x: 800,
//             y: 600,
//             duration: 2000,
//             yoyo: true,
//             repeat: -1,
//             ease: 'Sine.easeInOut'
//         });
//     }

//     update() {
//         // Example: Camera follows the ball
//         this.cameras.main.startFollow(this.ball);
//     }
// }

// export default MainScene;

// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainScene' });
//     }

//     create() {
//         // Add an image to the scene
//         const logo = this.add.image(400, 300, 'logo');

       
//         this.tweens.add({
//             targets: logo,
//             x: 600,
//             duration: 1000,
//             ease: 'Power1',
//             yoyo: true,
//             repeat: -1 
//         });

//         this.tweens.add({
//             targets: logo,
//             y: 100,
//             duration: 1000,
//             ease: 'Power1',
//             yoyo: true,
//             repeat: -1 // Infinite loop
//         });

//         // Destroy the image after 5 seconds
//         this.time.delayedCall(5000, () => {
//             logo.destroy();
//         });
//     }
// }

// export default MainScene;


// import Phaser from 'phaser';

// class MainScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MainScene' });
//         this.isPaused = false;
//     }

//     preload() {
//         this.load.image('person', 'assets/tom.svg');
//     }

//     create() {
       
//         this.person = this.add.image(400, 300, 'person');
//         this.person.setInteractive(); 

//         this.moveSpeed = 100; 
//         this.direction = 1; 

      
//         this.tween = this.tweens.add({
//             targets: this.person,
//             x: { from: 400, to: 800 }, 
//             duration: 2000, 
//             ease: 'Linear',
//             repeat: -1, 
//             yoyo: true,
//             paused: false, 
//         });

//         this.startMovement();

       
//         this.createButtons();

    
//         this.input.on('pointerdown', (pointer) => {
//             if (this.person.getBounds().contains(pointer.x, pointer.y)) {
//                 this.togglePause();
//             }
//         });
//     }

//     startMovement() {
//         this.tween.play(); 
//     }

//     togglePause() {
//         if (this.isPaused) {
//             this.tween.resume(); 
//         } else {
//             this.tween.pause(); 
//         }
//         this.isPaused = !this.isPaused; 
//         this.updateButtonText(); 
//     }

//     createButtons() {
//         // Create Pause Button
//         this.pauseButton = this.add.text(100, 550, 'Pause', { fontSize: '32px', fill: '#fff', backgroundColor: '#000' })
//             .setInteractive()
//             .on('pointerdown', () => this.togglePause());

//         // Create Resume Button
//         this.resumeButton = this.add.text(400, 550, 'Resume', { fontSize: '32px', fill: '#fff', backgroundColor: '#000' })
//             .setInteractive()
//             .on('pointerdown', () => this.togglePause());
        
//         // Initial button text
//         this.updateButtonText();
//     }

//     updateButtonText() {
//         // Update button text based on pause state
//         if (this.isPaused) {
//             this.pauseButton.setText('Paused');
//             this.resumeButton.setText('Resume');
//         } else {
//             this.pauseButton.setText('Pause');
//             this.resumeButton.setText('Resume');
//         }
//     }

//     update() {
//         // You can add more update logic here if needed
//     }
// }

// export default MainScene;


// import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
      
        this.load.image('person', 'assets/images/jocker.jpg');
        this.load.audio('clickSound', 'assets/music/melody.mp3.mp3'); 
    }

    create() {
        
        this.person = this.add.image(400, 300, 'person');
        this.person.setInteractive(); 

        // Load the sound
        this.clickSound = this.sound.add('clickSound');

        // Set up the click event to play the sound
        this.person.on('pointerdown', () => {
            this.clickSound.play(); // Play the sound when the image is clicked
        });

        
        this.add.text(20, 20, 'Click the image to play a sound', { fontSize: '16px', fill: '#fff' });
    }

   
}

export default MainScene;











