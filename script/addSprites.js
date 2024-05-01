export function addFood(app, apples)
{
    const appleContainer = new PIXI.Container();
    app.stage.addChild(appleContainer);

    const appleCount = 2;

    const foodAssets = ['apple', 'puffs']

    for (let i = 0; i < appleCount; i++)
    {
        //const randomFood = Math.floor(Math.random() * 2)
        const foodAsset = foodAssets[i % foodAssets.length]

        const food = PIXI.Sprite.from(foodAsset);

        food.anchor.set(0.5);

        food.speed = 1 + Math.random() * 2;
        food.turnSpeed = Math.random() - 0.8;

        food.x = Math.random() * app.screen.width;

        food.scale.set(0.5 + Math.random() * 0.2);

        appleContainer.addChild(food);

        apples.push(food);
    }
}

export function addScores(app, doctorScore, patientScore){
    const doctorScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'green'});
    doctorScoreMessage.text = 'player 1 = ' + doctorScore; 
    doctorScoreMessage.anchor.set(0.5);
    doctorScoreMessage.x = 75;
    doctorScoreMessage.y = 30;
//
    const patientScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'blue'});
    patientScoreMessage.text = 'player 2 = ' + patientScore; 
    patientScoreMessage.anchor.set(0.5);
    patientScoreMessage.x = 1500;
    patientScoreMessage.y = 30;
    
    app.stage.addChild(doctorScoreMessage);
    app.stage.addChild(patientScoreMessage);

    //const listmess = [doctorScore, patientScore];
    //for(i = 0; i < listmess.length; i++){
    //    const scoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'blue'});
    //    scoreMessage.text = 'player = ' + listmess[i]
    //    scoreMessage.anchor.set(0.5);
    //    scoreMessage.x = 1500;
    //    scoreMessage.y = 30;
    //    app.stage.addChild(scoreMessage);
    //}
}

export function addCharacters(app, characters){
    const characterContainer = new PIXI.Container();
    app.stage.addChild(characterContainer)
    const characterCount = 2;
    const characterAssets = ['jordyn', 'wizard']
    for(let i = 0; i < characterCount; i++){
        const characterAsset = characterAssets[i % characterAssets.length];
        const character = PIXI.Sprite.from(characterAsset);

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