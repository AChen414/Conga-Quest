/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy = /*#__PURE__*/function () {
  function Enemy(ctx) {
    _classCallCheck(this, Enemy);

    this.ctx = ctx;
    this.characterFrameIndex = 0;
    var skeletonEnemy = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 16,
      height: 16
    };
    skeletonEnemy.image[0].src = './assets/dungeon_tileset/frames/skelet_run_anim_f0.png';
    skeletonEnemy.image[1].src = './assets/dungeon_tileset/frames/skelet_run_anim_f1.png';
    skeletonEnemy.image[2].src = './assets/dungeon_tileset/frames/skelet_run_anim_f2.png';
    skeletonEnemy.image[3].src = './assets/dungeon_tileset/frames/skelet_run_anim_f3.png';
    this.conga = [{
      sprite: skeletonEnemy,
      position: {
        x: 200,
        y: 200
      }
    }];
  }

  _createClass(Enemy, [{
    key: "enemySpawnPoint",
    value: function enemySpawnPoint() {}
  }, {
    key: "update",
    value: function update() {
      if (this.characterFrameIndex === 3) {
        this.characterFrameIndex = 0;
      } else {
        this.characterFrameIndex += 1;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      this.conga.forEach(function (enemy) {
        _this.ctx.drawImage(enemy.sprite.image[_this.characterFrameIndex], 0, 0, enemy.sprite.width, enemy.sprite.height, enemy.position.x, enemy.position.y, enemy.sprite.width * 2, enemy.sprite.height * 2);
      });
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy */ "./src/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.lastRenderTime = 0;
    this.counter = 0; // this.gameOver = false;

    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx);
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      console.log(this.ctx);
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate(currentTime) {
      var _this = this;

      if (this.counter > 3) {
        this.player.alive = this.gameOver();
      }

      window.requestAnimationFrame(function (currentTime) {
        _this.animate(currentTime);
      });
      var secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
      if (secondsSinceLastRender < 1 / this.player.playerSpeed) return;
      this.lastRenderTime = currentTime;
      this.counter += 1;
      console.log('Render');
      this.update();
      this.draw();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.outsideMap() || this.enemyCollision()) {
        return false;
      }

      return true;
    }
  }, {
    key: "outsideMap",
    value: function outsideMap() {
      if (this.player.conga[0].position.x < 0) {
        // When dying off the left
        return true;
      } else if (this.player.conga[0].position.x > 634) {
        // When dying off the right
        return true;
      } else if (this.player.conga[0].position.y < 0) {
        // When dying off the top
        return true;
      } else if (this.player.conga[0].position.y > 626) {
        // When dying off the bottom
        return true;
      }
    }
  }, {
    key: "enemyCollision",
    value: function enemyCollision() {}
  }, {
    key: "update",
    value: function update() {
      this.player.update();
      this.enemy.update();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, 650, 650);
      this.player.draw();
      this.enemy.draw();
    }
  }]);

  return Game;
}(); //webpack --watch --mode=development




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
// import _ from 'lodash';

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('gameScreen');
  var ctx = canvas.getContext('2d');
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  game.start();
});

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input = /*#__PURE__*/function () {
  function Input() {
    _classCallCheck(this, Input);

    // Sets initial direction to be moving up
    this.inputDirection = {
      x: 0,
      y: -1
    };
  }

  _createClass(Input, [{
    key: "getInputDirection",
    value: function getInputDirection() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            if (_this.inputDirection.x !== 0) break; // Makes it so you can't move left when moving left or right

            _this.inputDirection = {
              x: -1,
              y: 0
            };
            break;

          case 38:
            if (_this.inputDirection.y !== 0) break; // Makes it so you can't move up when moving up or down

            _this.inputDirection = {
              x: 0,
              y: -1
            };
            break;

          case 39:
            if (_this.inputDirection.x !== 0) break; // Makes it so you can't move right when moving right or left

            _this.inputDirection = {
              x: 1,
              y: 0
            };
            break;

          case 40:
            if (_this.inputDirection.y !== 0) break; // Makes it so you can't move down when moving down or up

            _this.inputDirection = {
              x: 0,
              y: 1
            };
            break;
        }
      });
      return this.inputDirection;
    }
  }]);

  return Input;
}();


;

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(ctx) {
    _classCallCheck(this, Player);

    this.playerSpeed = 5;
    this.ctx = ctx;
    this.x = 325;
    this.y = 325;
    this.input = new _input__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.direction; // Vector direction

    this.characterFrameIndex = 0;
    this.alive = true;
    var wizardCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 16,
      height: 24
    };
    wizardCharacter.image[0].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f0.png';
    wizardCharacter.image[1].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f1.png';
    wizardCharacter.image[2].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f2.png';
    wizardCharacter.image[3].src = './assets/dungeon_tileset/frames/wizzard_f_run_anim_f3.png';
    var knightCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 16,
      height: 24
    };
    knightCharacter.image[0].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f0.png';
    knightCharacter.image[1].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f1.png';
    knightCharacter.image[2].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f2.png';
    knightCharacter.image[3].src = './assets/dungeon_tileset/frames/knight_f_run_anim_f3.png';
    this.deathCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 18,
      height: 24
    };
    this.deathCharacter.image[0].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[1].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[2].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[3].src = './assets/follower-gravestone.png';
    this.conga = [{
      sprite: wizardCharacter,
      position: {
        x: 325,
        y: 325
      }
    }, {
      sprite: knightCharacter,
      position: {
        x: 325,
        y: 360
      }
    }, {
      sprite: wizardCharacter,
      position: {
        x: 325,
        y: 395
      }
    }];
  } // checkDeath() {
  //     if (this.outsideMap() || this.enemyCollision()) {
  //         this.alive = false;
  //         this.conga.forEach(character => {
  //             character.sprite = this.deathCharacter;
  //         })
  //         // Stops moving on death
  //         this.direction.x = 0;
  //         this.direction.y = 0;
  //     };
  // };
  // outsideMap() {
  //     if (this.conga[0].position.x < 0) {          // When dying off the left
  //         // this.conga[0].position.x = 0;
  //         return true
  //     } else if (this.conga[0].position.x > 634) { // When dying off the right
  //         // this.conga[0].position.x = 634;
  //         return true;
  //     } else if (this.conga[0].position.y < 0) {
  //         return true;
  //     } else if (this.conga[0].position.y > 626) {
  //         return true;
  //     };
  // };
  // enemyCollision() {
  // };


  _createClass(Player, [{
    key: "checkDeath",
    value: function checkDeath() {
      var _this = this;

      if (!this.alive) {
        this.conga.forEach(function (character) {
          character.sprite = _this.deathCharacter;
        });
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.checkDeath(); // Only gets direction when alive (stops moving when dead)

      if (this.alive) {
        this.direction = this.input.getInputDirection(); // Sets vector direction to player input
        // Logic for making conga line follow each other. Does this by having
        // each member take the position of the character in front of them

        for (var i = this.conga.length - 2; i >= 0; i--) {
          this.conga[i + 1].position = _objectSpread({}, this.conga[i].position);
        }
      }

      ; // Moves leader in direction of player input

      this.conga[0].position.x += this.direction.x * 35;
      this.conga[0].position.y += this.direction.y * 35; // Loops through character's different movement animations

      if (this.characterFrameIndex === 3) {
        this.characterFrameIndex = 0;
      } else {
        this.characterFrameIndex += 1;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this.conga.forEach(function (character) {
        _this2.ctx.drawImage(character.sprite.image[_this2.characterFrameIndex], 0, 0, character.sprite.width, character.sprite.height, character.position.x, character.position.y, character.sprite.width * 1.75, character.sprite.height * 1.75);
      });
    }
  }]);

  return Player;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map