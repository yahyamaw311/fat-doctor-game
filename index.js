import { addApple, animateApples } from "./script/script.js";

const Application = PIXI.Application;
const app = new Application();

const apples = [];

async function setup()
{
    await app.init({ width: 960, height: 540 })

    document.body.appendChild(app.canvas);
}

async function preload()
{
    await PIXI.Assets.load("img/apple.png");
}

(async () =>
{
    await setup();
    await preload();

    addApple(app, apples);

    app.ticker.add((time) => animateApples(app, apples, time));
})();
