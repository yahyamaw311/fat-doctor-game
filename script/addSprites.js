export function addFood(app, apples)
{
    const appleContainer = new PIXI.Container();
    app.stage.addChild(appleContainer);

    const appleCount = 15;

    const foodAssets = ['apple', 'puffs']

    for (let i = 0; i < appleCount; i++)
    {
        //const randomFood = Math.floor(Math.random() * 2)
        const foodAsset = foodAssets[i % foodAssets.length]

        const food = PIXI.Sprite.from(foodAsset);
        if (foodAsset.match("apple")) {
            food.name = "apple";
        } else {
            food.name = "puffs";
        }

        food.anchor.set(0.5);

        food.speed = 1 + Math.random() * 2;
        food.turnSpeed = Math.random() - 0.8;

        food.x = Math.random() * app.screen.width;

        food.scale.set(0.5 + Math.random() * 0.2);

        appleContainer.addChild(food);
        apples.push(food);
    }
}

export function addScores(app, messageTest){
    const doctorScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'green'});
    doctorScoreMessage.text = 'player 1 = ' + 0; 
    doctorScoreMessage.anchor.set(0.5);
    doctorScoreMessage.x = 125;
    doctorScoreMessage.y = 30;
//
    const patientScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'blue'});
    patientScoreMessage.text = 'player 2 = ' + 0; 
    patientScoreMessage.anchor.set(0.5);
    patientScoreMessage.x = 1500;
    patientScoreMessage.y = 30;
    
    app.stage.addChild(doctorScoreMessage);
    app.stage.addChild(patientScoreMessage);

    messageTest.push(doctorScoreMessage)
    messageTest.push(patientScoreMessage)
}

export function wizardAddPoint(doctorScore, doctorMessage){
    doctorMessage.text = 'player 1 = ' + doctorScore;
}

export function addCharacters(app, characters){
    const characterContainer = new PIXI.Container();
    app.stage.addChild(characterContainer)
    const characterCount = 2;
    const characterAssets = ['jordyn', 'wizard']
    for(let i = 0; i < characterCount; i++){
        const characterAsset = characterAssets[i % characterAssets.length];
        const character = PIXI.Sprite.from(characterAsset);
        if (characterAsset.match("jordyn")) {
            character.name = "jordyn";
        } else if (characterAsset.match("wizard")) {
            character.name = "wizard";
        }

        character.y = 600;
        character.x = Math.random() * app.screen.width;
        characterContainer.addChild(character);

        characters.push(character);
    }
    return characters;
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
            apple.x = Math.random() * app.screen.width;
        }
        if (apple.y > app.screen.height + stagePadding)
        {
            apple.y -= boundHeight;
            apple.x = Math.random() * app.screen.width;
        }

    });
}