import { addFood, animateApples, addCharacters } from "./script/addSprites.js";
import { addBackground } from "./script/addBackground.js";
import { Controller } from "./script/controller.js";

export async function gameLoop(app, foods, characters){
    addBackground(app)
    addCharacters(app, characters)
    addFood(app, foods);

    app.ticker.add((time) => {
        animateApples(app, foods, time);
        if (controller.keys.left.pressed && characters[0].x > 0) characters[0].x -= 10;
        else if (controller.keys.right.pressed && characters[0].x < (appWidth - 50)) characters[0].x += 10;
    
        
        if (controller.keys.left2.pressed && characters[1].x > 0) characters[1].x -= 10;
        else if (controller.keys.right2.pressed && characters[1].x < (appWidth - 50)) characters[1].x += 10;
    });
}