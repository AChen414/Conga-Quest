export default class Input {
    constructor() {
        this.inputDirection = { x: 0, y: -1};
    }

    getInputDirection() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    this.inputDirection = { x: -1, y: 0 };
                    break;
                case 38:
                    this.inputDirection = { x: 0, y: -1 };
                    break;
                case 39:
                    this.inputDirection = { x: 1, y: 0 };
                    break;
                case 40:
                    this.inputDirection = { x: 0, y: 1 };
                    break;
            }
        })
        
        return this.inputDirection
    }
    
};