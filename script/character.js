// Define the Spine animation map for the character.
// name: animation track key.
// loop: do the animation once or infinitely.
const animationMap = {
    idle: {
        name: 'idle',
        loop: true,
    },
    walk: {
        name: 'walk',
        loop: true,
    },
    run: {
        name: 'run',
        loop: true,
    },
    jump: {
        name: 'jump',
        timeScale: 1.5,
    },
    hover: {
        name: 'hoverboard',
        loop: true,
    },
    spawn: {
        name: 'portal',
    },
};

// Class for handling the character Spine and its animations.
export class SpineBoy
{
    constructor()
    {
        // The character's state.
        this.state = {
            walk: false,
        };

        // Create the main view and a nested view for directional scaling.
        this.view = new PIXI.Container();
        this.directionalView = new PIXI.Container();

        // Create the Spine instance using the preloaded Spine asset aliases.
        this.spine = PIXI.Sprite.from("apple");

        // Add the Spine instance to the directional view.
        this.directionalView.addChild(this.spine);

        // Add the directional view to the main view.
        this.view.addChild(this.directionalView);
    }

    update()
    {
        // Handle the character animation based on the latest state and in the priority order.
        if (this.state.walk) this.playAnimation(animationMap.walk);
        else this.playAnimation(animationMap.idle);
    }

    isAnimationPlaying({ name })
    {
        // Check if the current animation on main track equals to the queried.
        // Also check if the animation is still ongoing.
        return this.currentAnimationName === name && !this.spine.state.getCurrent(0).isComplete();
    }

    // Return the name of the current animation on main track.
    get currentAnimationName()
    {
        return this.spine.state.getCurrent(0)?.animation.name;
    }

    // Return character's facing direction.
    get direction()
    {
        return this.directionalView.scale.x > 0 ? 1 : -1;
    }

    // Set character's facing direction.
    set direction(value)
    {
        this.directionalView.scale.x = value;
    }
}
