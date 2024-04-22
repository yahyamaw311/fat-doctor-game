export function addFood(app, foods){
    const foodContainer = new PIXI.Container();

    app.stage.addChild(foodContainer);

    const foodCount = 20;
    const foodAssets = ['apple', 'tacos'];

    for(let i = 0; i < foodAssets; i++){
        const foodAsset = foodAssets[i % foodAssets.length];

        const food = PIXI.Sprite.from(foodAsset);

        food.anchor.set(0.5);

        // Assign additional properties for the animation.
        food.direction = Math.random() * Math.PI * 2;
        food.speed = 2 + Math.random() * 2;
        food.turnSpeed = Math.random() - 0.8;

        // Randomly position the food sprite around the stage.
        food.x = Math.random() * app.screen.width;
        food.y = Math.random() * app.screen.height;

        food.scale.set(0.5 + Math.random() * 0.2);

        foodContainer.addChild(food)

        foods.push(food);        
    }
}