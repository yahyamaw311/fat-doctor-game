import { addBackground } from './addBackground.js';

const app = new PIXI.Application();
//await app.init({ width: 640, height: 360 })
//document.body.appendChild(app.canvas);

async function setup()
{
    // Intialize the application.
    await app.init({ background: 'black', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);
}

async function preload()
{
    const assets = [
        { alias: 'background', src: './images/background.png' },
        { alias: 'apple', src: './images/apple.png' },
        { alias: 'tacos', src: './images/tacos.png' },
    ];
    await PIXI.Assets.load(assets);
}

(async () =>
{
    await setup();
    await preload();

    addBackground(app);
})();