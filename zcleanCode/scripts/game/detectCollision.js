export function detectCollision(app, foods, characters){

    foods.forEach(food => {
        var foodBoundsX = [(food.x - food.width / 2), (Math.round(food.x + food.width / 2))]
        var foodBoundsY = [(Math.round(food.y - food.height / 2)), (Math.round(food.y + food.height / 2))]
    
    
        characters.forEach(character => {
            var characterBoundsX = [(Math.round(character.x)), (Math.round(character.x + character.width - 7))]
            var characterBoundsY = [(Math.round(character.y - character.height / 10)), (Math.round(character.y + character.height / 2))]
        
        
            if(characterBoundsX[0] <= foodBoundsX[1] && characterBoundsX[1] >= foodBoundsX[0] && characterBoundsY[0] <= foodBoundsY[1] && characterBoundsY[1] >= foodBoundsY[0]){
                // faire réaparaitre la nourriture en haut
                food.y = app.screen.height;
                food.x = Math.random() * app.screen.width;

                if(character.name == "docteur" && food.name == "cheetos"){
                    return "docteur++"
                }

                else if(character.name == "docteur" && food.name == "pomme"){
                    return "docteur--"
                }

                else if(character.name == "patient" && food.name == "pomme"){
                    return "patient++"
                }

                else if(character.name == "patient" && food.name == "cheetos"){
                    return "patient--"
                }
            }
        })
    })
}