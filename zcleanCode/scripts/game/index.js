import { addBackground } from "./addBackground.js";
import { addCharacters, addFood } from "./addSprites.js";
import { animateFood } from "./foodAnimation.js";

const Application = PIXI.Application;
const app = new Application();

const foods = []
const characters = []
const messages = []

const appWidth = 1000
const appHeight = 500

async function setup(){
    await app.init({width: appWidth, height: appHeight})
    document.body.style.overflowX = "hidden"
    document.body.append(app.canvas)
}

async function preload(){
    const assets = [
        { alias: 'background', src: '../img/background.jpg' },
        { alias: 'cheetos', src: '../img/cheetos.png' },
        { alias: 'apple', src: '../img/apple.png' },
        { alias: 'patient', src: '../img/patient.png' },
        { alias: 'doctor', src: '../img/doctor.png' }
    ]

    await PIXI.Assets.load(assets)
}

(async () => {
    await setup()
    await preload()

    addBackground(app)
    addFood(app, foods)
    addCharacters(app, characters)

    app.ticker.add((time) => {
        animateFood(app, foods, time)
    })
})();