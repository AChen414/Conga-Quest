import Player from './player';
import Input from './input';
import Enemy from './enemy';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.lastRenderTime = 0;
        this.gameOver = false;
        this.player = new Player(this.ctx);
        this.enemy = new Enemy(this.ctx);
    }

    start() {
        console.log(this.ctx)
        this.animate();
    }

    animate(currentTime) {
        if (this.gameOver) {
            return alert('You lose');
        }
        window.requestAnimationFrame((currentTime) => {
            this.animate(currentTime);
        });
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / this.player.playerSpeed) return ;
        this.lastRenderTime = currentTime;
        console.log('Render');

        
        this.update();
        this.draw();
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