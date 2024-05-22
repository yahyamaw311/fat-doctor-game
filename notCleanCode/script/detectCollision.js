export default function detectCollision(foods, characters, app, messagesTest) {
    var winner;
    foods.forEach(food => {
        var foodxBound1 = Math.round(food.x - food.width / 2);
        var foodxBound2 = Math.round(food.x + food.width / 2);
        var foodyBound1 = Math.round(food.y - food.height / 2);
        var foodyBound2 = Math.round(food.y + food.height / 2);

        for (let character of characters) {
            var characterxBound1 = Math.round(character.x);
            var characterxBound2 = Math.round(character.x + character.width - 7);
            var characteryBound1 = Math.round(character.y - character.height / 10);
            var characteryBound2 = Math.round(character.y + character.height / 2);

            if (characterxBound1 <= foodxBound2 && 
                characterxBound2 >= foodxBound1 && 
                foodyBound2 >= characteryBound1 && 
                foodyBound1 <= characteryBound2) {
                food.y = app.screen.height;
                food.x = Math.random() * app.screen.width;
                if (character.name == "wizard" && food.name == "puffs") {
                    winner = "wizard";
                } else if (character.name == "jordyn" && food.name == "apple") {
                    winner = "jordyn";
                } else if (character.name == "wizard" && food.name == "apple") {
                    winner = "wizardLoses";
                } else if (character.name == "jordyn" && food.name == "puffs") {
                    winner = "jordynLoses"
                }
                break;
            }
        }
    });
    return winner;
}