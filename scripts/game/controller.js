// Map keyboard key codes to controller's state keys
const keyMap = {
    // pour les mouvements à gauche
    KeyA: 'left2',
    ArrowLeft: 'left',

    // pour les mouvements à droite
    KeyD: 'right2',
    ArrowRight: 'right',
};

// Class for handling keyboard inputs.
export class Controller
{
    constructor()
    {
        // The controller's state.
        this.keys = {
            left: { pressed: false},
            right: { pressed: false},

            left2: { pressed: false},
            right2: { pressed: false},
            
        };

        // Register event listeners for keydown and keyup events.
        window.addEventListener('keydown', (event) => this.keydownHandler(event));
        window.addEventListener('keyup', (event) => this.keyupHandler(event));
    }

    keydownHandler(event)
    {
        const key = keyMap[event.code];
        this.keys[key].pressed = true;
    }

    keyupHandler(event)
    {
        const key = keyMap[event.code];

        this.keys[key].pressed = false;
    }
}
