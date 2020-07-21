import Input from './input';

export default class Player {
    constructor(ctx) {
        this.playerSpeed = 5;
        this.ctx = ctx;
        this.x = 325;
        this.y = 325;
        this.input = new Input();
        this.direction;                     // Vector direction
        this.characterFrameIndex = 0;
        this.alive = true;

        const wizardCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 16,
            height: 28
        };
        wizardCharacter.image[0].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f0.png';
        wizardCharacter.image[1].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f1.png';
        wizardCharacter.image[2].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f2.png';
        wizardCharacter.image[3].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f3.png';

        const knightCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 16,
            height: 28
        };
        knightCharacter.image[0].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f0.png';
        knightCharacter.image[1].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f1.png';
        knightCharacter.image[2].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f2.png';
        knightCharacter.image[3].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f3.png';

        this.deathCharacter = {
            image: [new Image(), new Image(), new Image(), new Image()],
            width: 16,
            height: 28
        }
        this.deathCharacter.image[0].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[1].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[2].src = './assets/follower-gravestone.png';
        this.deathCharacter.image[3].src = './assets/follower-gravestone.png';

        this.conga = [
            { sprite: wizardCharacter, position: { x: 325, y: 325 } },
            { sprite: knightCharacter, position: { x: 325, y: 360 } },
            { sprite: wizardCharacter, position: { x: 325, y: 395 } }
        ];
    }

    checkDeath() {
        if (this.outsideMap() || this.enemyCollision()) {
            this.alive = false;
            this.conga.forEach(character => {
                character.sprite = this.deathCharacter;
            })

            // Stops moving on death
            this.direction.x = 0;
            this.direction.y = 0;
        };
    };

    outsideMap() {
        if (this.conga[0].position.x < 0 || this.conga[0].position.x > 634 || this.conga[0].position.y < 0 || this.conga[0].position.y > 623) {
            return true;
        };
    };

    enemyCollision() {

    };

    update() {
        // Only gets direction when alive
        if (this.alive) {
            this.direction = this.input.getInputDirection();               // Sets vector direction to player input
            
            // Logic for making conga line follow each other. Does this by having
            // each member take the position of the character in front of them
            for (let i = this.conga.length - 2; i >= 0; i--) {
                this.conga[i + 1].position = { ...this.conga[i].position }
            }
        };
            
        // Moves leader in direction of player input
        this.conga[0].position.x += (this.direction.x * 35)
        this.conga[0].position.y += (this.direction.y * 35)
        
        // Loops through character's different movement animations
        if (this.characterFrameIndex === 3) {
            this.characterFrameIndex = 0;
        } else {
            this.characterFrameIndex += 1;
        }

        this.checkDeath();
    }

    draw() {
        this.conga.forEach(character => {
            this.ctx.drawImage(
                character.sprite.image[this.characterFrameIndex],
                0,
                0,
                character.sprite.width,
                character.sprite.height,
                character.position.x,
                character.position.y,
                character.sprite.width * 1.75,
                character.sprite.height * 1.75
            )

        })
    }
}

