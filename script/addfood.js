export function addFood(app, apples)
{
    const appleContainer = new PIXI.Container();
    app.stage.addChild(appleContainer);

    const appleCount = 10;

    const foodAssets = ['apple', 'puffs']

    for (let i = 0; i < appleCount; i++)
    {
        //const randomFood = Math.floor(Math.random() * 2)
        const foodAsset = foodAssets[i % foodAssets.length]

        const food = PIXI.Sprite.from(foodAsset);

        food.anchor.set(0.5);

        food.direction = Math.random() * Math.PI * 2;
        food.speed = 1 + Math.random() * 2;
        food.turnSpeed = Math.random() - 0.8;

        food.x = Math.random() * app.screen.width;

        food.scale.set(0.5 + Math.random() * 0.2);

        appleContainer.addChild(food);

        apples.push(food);
    }
}

export function animateApples(app, apples, time)
{
    const delta = time.deltaTime;

    const stagePadding = 100;
    const boundHeight = app.screen.height + stagePadding * 2;

    apples.forEach((apple) =>
    {
        apple.y += 2 * apple.speed;
        apple.rotation += 0.06;

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