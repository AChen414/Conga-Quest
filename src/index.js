// import _ from 'lodash';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameScreen');
    const ctx = canvas.getContext('2d');

    const game = new Game(ctx);
    game.start();
})