const langChoices = document.querySelector(".langChoices")
const languagelist = document.querySelectorAll('a')

window.onload = () => {
    translateWebsite("french")
}

languagelist.forEach(lang => {
    lang.addEventListener('click', () => {

        // remove active from last active language and put it in the new active language
        langChoices.querySelector('.active').classList.remove('active')
        lang.classList.add('active')

        // get the chosen language
        const languageChosen = lang.getAttribute('language')

        // replace every element of the page
        translateWebsite(languageChosen)
    })
})

function translateWebsite(languageChosen) {
    for (var element in dictionnary[languageChosen]) {
        // cette partie fait pas de sens, si jitere dans le dictionnaire c sur quil est la
        // il faut verifier que document.getEle.. != null
        // if(dictionnary[languageChosen].hasOwnProperty(element)){
        document.getElementById(element).textContent = dictionnary[languageChosen][element]
        // }
    }
}


// maybe add an extra layer for each page for example
// french: {
//     mainPage: {

//     },
//     rulesPage: {

//     }
// }
// ACTUALLY I NEED TO DO IT

const dictionnary = {
    french: {
        // main page
        title: "Docteur vs Patient",
        jouer: "Jouer",
        regles: "Règles",

        // rules page
        retour: "retour",
        reglesDuJeu: "Règles du jeu",
        contexte: "1. Contexte",
        contexteP: "C’est un jeu à deux joueurs, le docteur et le patient. Des pommes et des Cheetos tombent du ciel et vous devez les manger.",
        elementsJeu: "2. Éléments du jeu",
        elementsJeuP: "le jeu est composé de 2 éléments: les nourritures et les personnages. Les nourritures sont les pommes et les Cheetos et les personnages sont le patient et le médecin.",
        patient: "Patient",
        docteur: "Docteur",
        pomme: "Pomme",
        cheetos: "Cheetos",
        butJeu: "3. But du jeu",
        butJeuP1: "Au fur et à mesure que les aliments tombent du ciel, vous devez les attraper et les manger. Chaque joueur a un aliment spécifique qu’il doit manger.",
        butJeuP2: "Le docteur doit manger les cheetos.",
        butJeuP3: "Le patient doit manger les pommes.",
        systemePoints: "4. Système de points",
        systemePointsP1: "Le système de points est assez simple. Lorsque vous mangez votre aliment respectif, vous gagnez un point et vous faites perdre un point à votre adversaire.",
        systemePointsP2: "Si vous mangez un aliment que vous n’êtes pas censé manger, vous perdez un point; il est donc très important d’éviter la mauvaise nourriture.",
        mouvement: "5. Mouvement",
        mouvementP1: "Les joueurs peuvent bouger en horizontal seulement, c’est-à-dire à droite et à gauche",
        mouvementP2: "Docteur : « A » et « D »",
        mouvementP3: "Patient : « flèche gauche » et « flèche droite »",
        commentGagner: "6. Comment gagner?",
        commentGagnerP1: "Le premier joueur à 10 points gagne la partie."
    },

    english: {
        // main page
        title: "Doctor vs Patient",
        jouer: "Play",
        regles: "Rules",

        // rules page
        retour: "back",
        reglesDuJeu: "Game Rules",
        contexte: "1. Context",
        contexteP: "It is a two-player game, the doctor and the patient. Apples and Cheetos fall from the sky and you must eat them.",
        elementsJeu: "2. Game Elements",
        elementsJeuP: "The game consists of 2 elements: food and characters. The food items are apples and Cheetos and the characters are the patient and the doctor.",
        patient: "Patient",
        docteur: "Doctor",
        pomme: "Apple",
        cheetos: "Cheetos",
        butJeu: "3. Objective of the Game",
        butJeuP1: "As the food falls from the sky, you must catch and eat it. Each player has a specific food item they must eat.",
        butJeuP2: "The doctor must eat the Cheetos.",
        butJeuP3: "The patient must eat the apples.",
        systemePoints: "4. Point System",
        systemePointsP1: "The point system is quite simple. When you eat your respective food item, you gain a point and make your opponent lose a point.",
        systemePointsP2: "If you eat a food item you are not supposed to eat, you lose a point; so it is very important to avoid the wrong food.",
        mouvement: "5. Movement",
        mouvementP1: "Players can only move horizontally, that is, to the right and left",
        mouvementP2: "Doctor: “A” and “D”",
        mouvementP3: "Patient: “left arrow” and “right arrow”",
        commentGagner: "6. How to Win?",
        commentGagnerP1: "The first player to reach 10 points wins the game."
    },

    spanish: {
        // main page
        title: "Doctor vs Paciente",
        jouer: "Jugar",
        regles: "Reglas",

        // rules page
        retour: "volver",
        reglesDuJeu: "Reglas del juego",
        contexte: "1. Contexto",
        contexteP: "Es un juego de dos jugadores, el doctor y el paciente. Manzanas y Cheetos caen del cielo y debes comerlos.",
        elementsJeu: "2. Elementos del juego",
        elementsJeuP: "El juego consta de 2 elementos: comida y personajes. Los alimentos son manzanas y Cheetos, y los personajes son el paciente y el doctor.",
        patient: "Paciente",
        docteur: "Doctor",
        pomme: "Manzana",
        cheetos: "Cheetos",
        butJeu: "3. Objetivo del juego",
        butJeuP1: "A medida que la comida cae del cielo, debes atraparla y comerla. Cada jugador tiene un alimento específico que debe comer.",
        butJeuP2: "El doctor debe comer los Cheetos.",
        butJeuP3: "El paciente debe comer las manzanas.",
        systemePoints: "4. Sistema de puntos",
        systemePointsP1: "El sistema de puntos es bastante simple. Cuando comes tu respectivo alimento, ganas un punto y haces que tu oponente pierda un punto.",
        systemePointsP2: "Si comes un alimento que no debes comer, pierdes un punto; por lo tanto, es muy importante evitar la comida equivocada.",
        mouvement: "5. Movimiento",
        mouvementP1: "Los jugadores solo pueden moverse horizontalmente, es decir, a la derecha e izquierda",
        mouvementP2: "Doctor: “A” y “D”",
        mouvementP3: "Paciente: “flecha izquierda” y “flecha derecha”",
        commentGagner: "6. Cómo ganar?",
        commentGagnerP1: "El primer jugador en llegar a 10 puntos gana la partida."
    }
}