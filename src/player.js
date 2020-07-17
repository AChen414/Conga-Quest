import Input from './input';

export default class Player {
    constructor(ctx) {
        this.playerSpeed = 3;
        this.ctx = ctx;
        this.x = 325;
        this.y = 325;
        this.input = new Input();
        this.direction;

        const wizardCharacter = {
            image: new Image(),
            width: 16,
            height: 28
        };
        wizardCharacter.image.src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f0.png';

        const knightCharacter = {
            image: new Image(),
            width: 16,
            height: 28
        };
        knightCharacter.image.src = './assets/dungeon_tileset/frames/knight_f_run_anim_f0.png';

        this.conga = [
            { sprite: wizardCharacter, position: { x: 325, y: 325 } },
            { sprite: knightCharacter, position: { x: 325, y: 345 } },
            { sprite: wizardCharacter, position: { x: 325, y: 365 } }
        ];
    }

    update() {
        this.direction = this.input.getInputDirection();
        for (let i = this.conga.length - 2; i >= 0; i--) {
            this.conga[i + 1].position = { ...this.conga[i].position }
        }
        this.conga[0].position.x += (this.direction.x * 20)
        this.conga[0].position.y += (this.direction.y * 20)
    }

    draw() {
        this.conga.forEach(character => {
            this.ctx.drawImage(character.sprite.image, character.position.x, character.position.y)
        })
    }
}

