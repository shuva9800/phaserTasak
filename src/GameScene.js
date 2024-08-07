import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.sessions = [];
        this.sessionId = 0;
    }

    preload() {
        this.load.image('ball', 'assets/arrow-right.svg');
        this.load.audio('clock', 'assets/music/melody.mp3.mp3');
    }

    create() {
        this.ball = this.physics.add.sprite(400, 300, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));

        this.clockSound = this.sound.add('clock');
        this.input.on('pointerdown', this.handleStartSession, this);
    }

    handleStartSession() {
        const randomDuration = Phaser.Math.Between(30, 120);
        const sessionId = `Session-${++this.sessionId}`;
        const startTime = new Date().toLocaleTimeString();

        this.clockSound.play({ loop: true });

        const timer = this.time.addEvent({
            delay: randomDuration * 1000,
            callback: () => {
                this.clockSound.stop();
                const endTime = new Date().toLocaleTimeString();
                this.sessions.push({ sessionId, startTime, endTime });
                this.updateSessionList();
                this.ball.setVelocity(0);
            }
        });

        this.ball.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
    }

    updateSessionList() {
        const sessionList = document.getElementById('session-list');
        sessionList.innerHTML = '';
        this.sessions.forEach(session => {
            const listItem = document.createElement('li');
            listItem.textContent = `${session.sessionId}: ${session.startTime} - ${session.endTime}`;
            sessionList.appendChild(listItem);
        });
    }

    update() {
        // Update logic for the ball or other game elements if needed
    }
}

export default GameScene;
