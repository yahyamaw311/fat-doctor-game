
const controller = new Controller();
const messagesTest = [];

(async () => {
    addScores(app, messagesTest)

    let doctorPoints = 0;
    let patientPoints = 0;

    app.ticker.add((time) => {
        animateApples(app, foods, time);
        if (controller.keys.left.pressed && characters[0].x > 0) characters[0].x -= 5;
        else if (controller.keys.right.pressed && characters[0].x < (appWidth - 50)) characters[0].x += 5;


        if (controller.keys.left2.pressed && characters[1].x > 0) characters[1].x -= 5;
        else if (controller.keys.right2.pressed && characters[1].x < (appWidth - 50)) characters[1].x += 5;
        
        var winner = detectCollision(foods, characters, app, messagesTest)

        if (winner == "jordyn") {
            patientPoints++;
            if (doctorPoints > 0) {
                doctorPoints--;
            }
        } else if (winner == "wizard") {
            doctorPoints++;
            if(patientPoints > 0){
                patientPoints--;
            }
            
        } else if (winner == "wizardLoses" && doctorPoints > 0) {
            doctorPoints--;
        } else if (winner == "jordynLoses" && patientPoints > 0) {
            patientPoints--;
        }
        messagesTest[0].text = "jordyn points = " + patientPoints
        messagesTest[1].text = " wizard points = " + doctorPoints
    });
})();
