import { addFood, animateApples, addCharacters, addScores } from "./script/addSprites.js";
import { addBackground } from "./script/addBackground.js";
import { Controller } from "./script/controller.js";
import detectCollision from "./script/detectCollision.js";

const Application = PIXI.Application;
const app = new Application();
const controller = new Controller();

const foods = [];
const characters = [];
const messagesTest = [];

let appWidth = 1650
let appHeight = 900

async function setup() {
    await app.init({ width: appWidth, height: appHeight });
    document.body.style.overflowX = "hidden";
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

    addScores(app, messagesTest)

    let doctorPoints = 0;
    let fatPoints = 0;

    app.ticker.add((time) => {
        animateApples(app, foods, time);
        if (controller.keys.left.pressed && characters[0].x > 0) characters[0].x -= 10;
        else if (controller.keys.right.pressed && characters[0].x < (appWidth - 50)) characters[0].x += 10;


        if (controller.keys.left2.pressed && characters[1].x > 0) characters[1].x -= 10;
        else if (controller.keys.right2.pressed && characters[1].x < (appWidth - 50)) characters[1].x += 10;

        var collisionedPlayer = detectCollision(foods, characters, app, messagesTest)
        // if (winnerTesties != undefined) {
        //     console.log(winnerTesties)
        // }
        if (collisionedPlayer == "jordyn") {
            fatPoints++;
            if (doctorPoints > 0) {
                doctorPoints--;
            }
        } else if (collisionedPlayer == "wizard") {
            doctorPoints++;

            if (fatPoints > 0) {
                fatPoints--;
            }
        } else if (collisionedPlayer == "wizard loses" && doctorPoints > 0) {
            doctorPoints--;
        } else if (collisionedPlayer == "jordyn loses" && fatPoints > 0) {
            fatPoints--;
        }

        messagesTest[0].text = "jordyn points = " + fatPoints
        messagesTest[1].text = " wizard points = " + doctorPoints
    });
})();
