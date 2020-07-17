export default class Player {
    constructor(ctx) {
        this.playerSpeed = 2;
        this.ctx = ctx;
        this.x = 325;
        this.y = 325;
        const characterSprite = {
            image: new Image(),
            width: 16,
            height: 28
        }

        characterSprite.image.src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f0.png';

        this.character = characterSprite;
    }

    update() {
        console.log('Update player')
    }

    draw() {
        this.ctx.fillRect(this.x+100, this.y+100, this.character.width, this.character.height);
        this.ctx.drawImage(this.character.image, this.x, this.y);
    }
}

