import { addFood, animateApples, addCharacters } from "./script/addSprites.js";
import { addBackground } from "./script/addBackground.js";
import { Controller } from "./script/controller.js";

const Application = PIXI.Application;
const app = new Application();
const controller = new Controller();

const foods = [];
const characters = [];

let appWidth = 1600
let appHeight = 900

async function setup()
{
    await app.init({ width: appWidth, height: appHeight })

    document.body.appendChild(app.canvas);
}

async function preload() {
    const assets = [
        {alias: 'background', src: 'img/background.png'},
        {alias: 'puffs', src: 'img/puffs.png'},
        {alias: 'apple', src: 'img/apple.png'},
        {alias: 'jordyn', src:'img/jordyn.png'}
    ]

    await PIXI.Assets.load(assets);
}

(async () => {
    await setup();
    await preload();

    addBackground(app)
    //addCharacters(app, characters)
    addFood(app, foods);
    //const character = PIXI.Sprite.from("img/jordyn.png");
    //const characterContainer = new PIXI.Container();
//
    //app.stage.addChild(characterContainer);
    //characterContainer.addChild(character);
    //character.x = 50;
    //character.y = 625;
//
    app.ticker.add((time) => {
        animateApples(app, foods, time);
        //if (controller.keys.left.pressed && character.x > 0) character.x -= 10;
        //else if (controller.keys.right.pressed && character.x < (appWidth - 50)) character.x += 10;
    });
})();
