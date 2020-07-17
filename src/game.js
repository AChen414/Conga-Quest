import Player from './player';
import Input from './input';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.lastRenderTime = 0;
        this.player = new Player(this.ctx);
    }

    start() {
        console.log(this.ctx)
        this.animate();
    }

    animate(currentTime) {
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
    }

    draw() {
        this.ctx.clearRect(0, 0, 650, 650);
        this.player.draw();
    }
}