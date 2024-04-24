export function addFood(app, apples)
{
    const appleContainer = new PIXI.Container();

    app.stage.addChild(appleContainer);

    const appleCount = 5;
    
    for (let i = 0; i < appleCount; i++)
    {
        const apple = PIXI.Sprite.from("img/apple.png");
        
        apple.anchor.set(0.5);
        
        apple.direction = Math.random() * Math.PI * 2;
        apple.speed = 1 + Math.random() * 1;
        apple.turnSpeed = Math.random() - 0.8;
        
        apple.y = Math.random() * app.screen.height;

        apple.scale.set(0.5 + Math.random() * 0.2);

        appleContainer.addChild(food);

        apples.push(food);
    }
}

export function animateApples(app, apples, time)
{
    const delta = time.deltaTime;

    const stagePadding = 100;
    const boundWidth = app.screen.width + stagePadding * 2;
    const boundHeight = app.screen.height + stagePadding * 2;

    apples.forEach((apple) =>
    {
        // Animate the apple movement direction according to the turn speed.
        apple.direction += apple.turnSpeed * 0.01;

        // Animate the apple position according to the direction and speed.
        apple.y += 3 + Math.random();

        apple.x += Math.random() * app.screen.width;


        // Apply the apple rotation according to the direction.
        apple.rotation += 0.075;

        // Wrap the apple position when it goes out of bounds.
        if (apple.x < -stagePadding)
        {
            apple.x += boundWidth;
        }
        if (apple.x > app.screen.width + stagePadding)
        {
            apple.x -= boundWidth;
        }
        if (apple.y < -stagePadding)
        {
            apple.y += boundHeight;
            apple.x = Math.random() * app.screen.width;
        }
        if (apple.y > app.screen.height + stagePadding)
        {
            apple.y -= boundHeight;
            apple.x = Math.random() * app.screen.width;
        }
    });
}


