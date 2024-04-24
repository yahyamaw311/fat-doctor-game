import { addFood, animateApples } from "./script/addfood.js";
import { addBackground } from "./script/addBackground.js";

const Application = PIXI.Application;
const app = new Application();

const foods = [];

async function setup()
{
    await app.init({ width: 1600, height: 900 })

    document.body.appendChild(app.canvas);
}

async function preload()
{
    const assets = [
        {alias: 'background', src: 'img/background.png'},
        {alias: 'puffs', src: 'img/puffs.png'},
        {alias: 'apple', src: 'img/apple.png'},
    ]
    
    await PIXI.Assets.load(assets);
}

(async () =>
{
    await setup();
    await preload();

    addBackground(app)
    addFood(app, foods);

    app.ticker.add((time) => animateApples(app, foods, time));
})();
