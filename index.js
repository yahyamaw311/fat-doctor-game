import { addFood, animateApples, addCharacters, addScores } from "./script/addSprites.js";
import { addBackground } from "./script/addBackground.js";
import { Controller } from "./script/controller.js";
import detectCollision from "./script/detectCollision.js";

const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
const context = cast.framework.CastReceiverContext.getInstance();
const CHANNEL = 'urn:x-cast:testChannel';
const CHANNEL2 = 'urn:x-cast:gameChannel';

const Application = PIXI.Application;
const app = new Application();
const controller = new Controller();

const foods = [];
const characters = [];
const messagesTest = [];

let appWidth = window.innerWidth
let appHeight = window.innerHeight

async function setup() {
    await app.init({ width: appWidth, height: appHeight });
    document.body.style.overflowX = "hidden";
    document.body.appendChild(app.canvas);

    const options = new cast.framework.CastReceiverOptions();

    options.customNamespaces = Object.assign({});
    options.customNamespaces[CHANNEL2] = cast.framework.system.MessageType.JSON;
    options.disableIdleTimeout = true;

context.start(options);
}

async function preload() {
    const assets = [
        { alias: 'background', src: 'img/background2.jpg' },
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
        
        var winner = detectCollision(foods, characters, app, messagesTest)

        if (winner == "jordyn") {
            fatPoints++;
            if (doctorPoints > 0) {
                doctorPoints--;
            }
        } else if (winner == "wizard") {
            doctorPoints++;
            fatPoints--;
        } else if (winner == "wizardLoses" && doctorPoints > 0) {
            doctorPoints--;
        } else if (winner == "jordynLoses" && fatPoints > 0) {
            fatPoints--;
        }
        messagesTest[0].text = "jordyn points = " + fatPoints
        messagesTest[1].text = " wizard points = " + doctorPoints
    });
})();
