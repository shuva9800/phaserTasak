//YOUTUBE VIDEO

// import Phaser from "phaser";
// import MainScene from "./mainScene"


// const config ={
//     type: Phaser.AUTO,
//     width:600,
//     height:600,
//     backgroundColor:"#000000",
//     scene:[MainScene]
// }


// export default config;








import Phaser from 'phaser';
import MainScene from './MainScene';
import PauseScene from './PauseScene';
import AnotherScene from './AnotherScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [MainScene, PauseScene, AnotherScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

export default config;













