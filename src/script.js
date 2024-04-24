export function addApple(app, apples)
{
    const appleContainer = new PIXI.Container();

    app.stage.addChild(appleContainer);

    const appleCount = 5;

    for (let i = 0; i < appleCount; i++)
    {
        const apple = PIXI.Sprite.from("apple.png");

        apple.anchor.set(0.5);

        apple.direction = Math.random() * Math.PI * 2;
        apple.speed = 1 + Math.random() * 1;
        apple.turnSpeed = Math.random() - 0.8;

        apple.x = Math.random() * app.screen.width;
        apple.y = Math.random() * app.screen.height;

        apple.scale.set(0.5 + Math.random() * 0.2);

        appleContainer.addChild(apple);

        apples.push(apple);
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
        apple.x += 0 * apple.speed;
        apple.y += 5 * apple.speed;

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
        }
        if (apple.y > app.screen.height + stagePadding)
        {
            apple.y -= boundHeight;
        }

    });
}
