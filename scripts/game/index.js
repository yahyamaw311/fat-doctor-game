import { addBackground } from "./addBackground.js"
import { addCharacters, addFood, addPointMessages } from "./addSprites.js"
import { Controller } from "./controller.js"
import { detectCollision } from "./detectCollision.js"
import { animateFood } from "./foodAnimation.js"

const Application = PIXI.Application
const app = new Application()
const controller = new Controller()
let controllerIndex = null;

const foods = []
const characters = []
const pointMessages = []

var doctorPoints = 0
var patientPoints = 0

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

window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    controllerIndex = gamepad.index;
    console.log("connected");
});

window.addEventListener("gamepaddisconnected", (event) => {
    controllerIndex = null;
    console.log("disconnected");
});

function handleStick1() {
    if (controllerIndex != null) {
        const gamepad = navigator.getGamepads()[controllerIndex];
        if (gamepad.axes[0].toFixed(2) > 0.5 && characters[0].x < (appWidth - 50)) {
            characters[0].x += 5
        }
        else if (gamepad.axes[0].toFixed(2) < -0.5 && characters[0].x > 0) {
            characters[0].x -= 5
        }
    }
}

function handleStick2() {
    if (controllerIndex != null) {
        const gamepad = navigator.getGamepads()[controllerIndex];
        if (gamepad.axes[2].toFixed(2) > 0.5 && characters[1].x < (appWidth - 50)) {
            characters[1].x += 5
        }
        else if (gamepad.axes[2].toFixed(2) < -0.5 && characters[1].x > 0) {
            characters[1].x -= 5
        }
    }
}


(async () => {
    await setup()
    await preload()

    addBackground(app)
    addFood(app, foods)
    addCharacters(app, characters)
    addPointMessages(app, pointMessages)

    app.ticker.add(() => {
        handleStick1();
        handleStick2();
        
        animateFood(app, foods)

        // mouvements pour le docteur
        if (controller.keys.left.pressed && characters[0].x > 0) characters[0].x -= (appWidth / 200)
        if (controller.keys.right.pressed && characters[0].x < (appWidth - 75)) characters[0].x += (appWidth / 200)

        // mouvements pour le patient
        if (controller.keys.left2.pressed && characters[1].x > -50) characters[1].x -= (appWidth / 200)
        if (controller.keys.right2.pressed && characters[1].x < (appWidth - 100)) characters[1].x += (appWidth / 200)

        // gestion de la collision
        const collisionResult = detectCollision(app, foods, characters)

        if(collisionResult == "doctor++"){
            doctorPoints++
            if(patientPoints > 0) patientPoints-- 
        }

        if(collisionResult == "patient++"){
            patientPoints++
            console.log(patientPoints)
            if(doctorPoints > 0) doctorPoints--
        }

        if(collisionResult == "doctor--" && doctorPoints > 0) doctorPoints--

        if(collisionResult == "patient--" && patientPoints > 0) patientPoints--

        pointMessages[0].text = "docteur = " + doctorPoints
        pointMessages[1].text = "patient = " + patientPoints
    })
})();