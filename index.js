import { addFood, animateApples, addCharacters, addScores } from "./script/addSprites.js";
import { addBackground } from "./script/addBackground.js";
import { Controller } from "./script/controller.js";
import detectCollision from "./script/detectCollision.js";

const Application = PIXI.Application;
const app = new Application();
const controller = new Controller();

const foods = [];
const characters = [];

let appWidth = 1600
let appHeight = 900

async function setup() {
    await app.init({ width: appWidth, height: appHeight });

    document.body.appendChild(app.canvas);
}

async function preload() {
    const assets = [
        { alias: 'background', src: 'img/background.png' },
        { alias: 'puffs', src: 'img/puffs.png' },
        { alias: 'apple', src: 'img/apple.png' },
        { alias: 'jordyn', src: 'img/jordyn.png' },
        { alias: 'wizard', src: 'img/wizard.png' }
    ]

    await PIXI.Assets.load(assets);

    // Create a new Text object
    
    
}

(async () => {
    await setup();
    await preload();

    addBackground(app);
    addCharacters(app, characters);
    addFood(app, foods);

    let doctorPoints = 0;
    let fatPoints = 0;
    
    app.ticker.add((time) => {
        animateApples(app, foods, time);
        if (controller.keys.left.pressed && characters[0].x > 0) characters[0].x -= 10;
        else if (controller.keys.right.pressed && characters[0].x < (appWidth - 50)) characters[0].x += 10;


        if (controller.keys.left2.pressed && characters[1].x > 0) characters[1].x -= 10;
        else if (controller.keys.right2.pressed && characters[1].x < (appWidth - 50)) characters[1].x += 10;
        if (detectCollision(foods, characters, app) == 0) {
            fatPoints++;
            console.log(fatPoints);
        } if (detectCollision(foods, characters, app) == 1) {
            doctorPoints++;
            console.log(doctorPoints);
        }
    });
})();
