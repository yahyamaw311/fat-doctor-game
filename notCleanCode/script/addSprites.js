export function addScores(app, messageTest){
    const doctorScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'green'});
    doctorScoreMessage.text = 'player 1 = ' + 0; 
    doctorScoreMessage.anchor.set(0.5);
    doctorScoreMessage.x = 100;
    doctorScoreMessage.y = 25;
//
    const patientScoreMessage = new PIXI.Text('', { fontFamily: 'Arial', fontSize: 25, fill: 'blue'});
    patientScoreMessage.text = 'player 2 = ' + 0; 
    patientScoreMessage.anchor.set(0.5);
    patientScoreMessage.x = 875;
    patientScoreMessage.y = 25;
    
    app.stage.addChild(doctorScoreMessage);
    app.stage.addChild(patientScoreMessage);

    messageTest.push(doctorScoreMessage)
    messageTest.push(patientScoreMessage)
}

export function wizardAddPoint(doctorScore, doctorMessage){
    doctorMessage.text = 'player 1 = ' + doctorScore;
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