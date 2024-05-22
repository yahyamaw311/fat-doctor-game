export function animateFood(app, foods){
    const stagePadding = 100
    const boundHeight = app.screen.height + stagePadding * 2

    foods.forEach((food) => {
        food.y += 1.5 * food.speed
        food.rotation += 0.02

        if(food.y > app.screen.height + stagePadding){
            food.y -= boundHeight;
            food.x = Math.random() * app.screen.width;
        }
    })
}