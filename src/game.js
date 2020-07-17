const PLAYER_SPEED = 2

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.lastRenderTime = 0;
    }

    start() {
        this.animate();
    }

    animate(currentTime) {
        window.requestAnimationFrame((currentTime) => {
            this.animate(currentTime);
        });
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / PLAYER_SPEED) return ;
        this.lastRenderTime = currentTime;
        console.log('Render');
    }
}

module.exports = Game; 