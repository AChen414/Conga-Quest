import Player from './player';
import Input from './input';
import Enemy from './enemy';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.lastRenderTime = 0;
        this.counter = 0;
        // this.gameOver = false;
        this.player = new Player(this.ctx);
        this.enemy = new Enemy(this.ctx);
    }

    start() {
        console.log(this.ctx)
        this.animate();
    }

    animate(currentTime) {

        if (this.counter > 3) {
            this.player.alive = this.gameOver();
        }
            
        window.requestAnimationFrame((currentTime) => {
            this.animate(currentTime);
        });
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / this.player.playerSpeed) return ;
        this.lastRenderTime = currentTime;
        this.counter += 1;
        console.log('Render');

        
        this.update();
        this.draw();
    }

    gameOver() {
        if (this.outsideMap() || this.enemyCollision()) {
            return false
        }
        return true;
    }

    outsideMap() {
        if (this.player.conga[0].position.x < 0) { // When dying off the left
            return true;
        } else if (this.player.conga[0].position.x > 634) { // When dying off the right
            return true;
        } else if (this.player.conga[0].position.y < 0) { // When dying off the top
            return true;
        } else if (this.player.conga[0].position.y > 626) { // When dying off the bottom
            return true;
        }
    };

    enemyCollision() {

    }

    update() {
        this.player.update();
        this.enemy.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, 650, 650);
        this.player.draw();
        this.enemy.draw();
    }
}