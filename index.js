import { addApple, animateApples }from "./src/script.js";

const Application = PIXI.Application;
const app = new Application();

const apples = [];

async function setup()
{
    await app.init({ width: 640, height: 360 })

    document.body.appendChild(app.canvas);
}

async function preload()
{
    await PIXI.Assets.load("apple.png");
}

(async () =>
{
    await setup();
    await preload();

    addApple(app, apples);

    app.ticker.add((time) => animateApples(app, apples, time));
})();
