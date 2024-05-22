export function addFood(app, foods){
    const foodContainer = new PIXI.Container()
    app.stage.addChild(foodContainer)

    const foodCount = 14
    const foodAssets = ['apple', 'cheetos']

    // itère pour créer les différentes nourritures
    for(let i = 0; i < foodCount; i++){
        // génère une pomme et ensuite un cheetos jusqu'a la fin
        const foodAsset = foodAssets[i % foodAssets.length]

        // ajoute des charactéristiques à food
        const food = PIXI.Sprite.from(foodAsset)
        food.name = foodAsset
        food.anchor.set(0.5)
        food.speed = 0.5 + Math.random() * 0.5
        food.turnSpeed = Math.random() - 0.8
        food.x = Math.random() * app.screen.width
        food.scale.set(0.5 + Math.random() * 0.2)

        foodContainer.addChild(food)
        foods.push(food)
    }
}


// similaire à addFood() 
export function addCharacters(app, characters){
    const characterContainer = new PIXI.Container()
    app.stage.addChild(characterContainer)

    const characterAssets = ['doctor', 'patient']
    for(let i = 0; i < characterAssets.length; i++){
        const characterAsset = characterAssets[i]
        
        const character = PIXI.Sprite.from(characterAsset)
        character.name = characterAsset
        character.y = (i == 0) ? 295 : 320 // pour égaliser en vertical
        character.x = (i == 0) ? 200 : 400 // pour les mettre dans un endroit séparré

        characterContainer.addChild(character)
        characters.push(character)
    }
}