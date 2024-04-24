// import { Application, Assets } from 'pixi.js';
// import { addApple, animateApples } from './addApple';

const Application = PIXI.Application;
const app = new Application();

document.body.appendChild(app.view);

// const apples = [];

// async function setup()
// {
//     await app.init({ background: '#1099bb', resizeTo: window });

//     document.body.appendChild(app.canvas);
// }

// async function preload()
// {
//     await Assets.load("apple.png");
// }

// (async () =>
// {
//     await setup();
//     await preload();

//     addApple(app, apples);

//     app.ticker.add((time) => animateApples(app, apples, time));
// })();
