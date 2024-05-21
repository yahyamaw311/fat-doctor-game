// Map keyboard key codes to controller's state keys
const keyMap = {
    KeyA: 'left2',
    ArrowLeft: 'left',

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
            left: { pressed: false, doubleTap: false, timestamp: 0 },
            right: { pressed: false, doubleTap: false, timestamp: 0 },

            left2: { pressed: false, doubleTap: false, timestamp: 0 },
            right2: { pressed: false, doubleTap: false, timestamp: 0 },
            
        };

        // Register event listeners for keydown and keyup events.
        window.addEventListener('keydown', (event) => this.keydownHandler(event));
        window.addEventListener('keyup', (event) => this.keyupHandler(event));
    }

    keydownHandler(event)
    {
        const key = keyMap[event.code];

        if (!key) return;

        const now = Date.now();

        // If not already in the double-tap state, toggle the double tap state if the key was pressed twice within 300ms.
        this.keys[key].doubleTap = this.keys[key].doubleTap || now - this.keys[key].timestamp < 300;

        // Toggle on the key pressed state.
        this.keys[key].pressed = true;
    }

    keyupHandler(event)
    {
        const key = keyMap[event.code];

        if (!key) return;

        const now = Date.now();

        // Reset the key pressed state.
        this.keys[key].pressed = false;

        // Reset double tap only if the key is in the double-tap state.
        if (this.keys[key].doubleTap) this.keys[key].doubleTap = false;
        // Otherwise, update the timestamp to track the time difference till the next potential key down.
        else this.keys[key].timestamp = now;
    }
}
