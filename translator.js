
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

function translateWebsite(languageChosen){
    for(var element in dictionnary[languageChosen]){
        // cette partie fait pas de sens, si jitere dans le dictionnaire c sur quil est la
        // il faut verifier que document.getEle.. != null
        if(dictionnary[languageChosen].hasOwnProperty(element)){
            document.getElementById(element).textContent = dictionnary[languageChosen][element]
        }
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
        //jouer: "Jouer",
        //regles: "Règles",
        
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
        //jouer: "Play",
        //regles: "Rules",
        
        // rules page
        retour: "",
        reglesDuJeu: "",
        contexte: "",
        contexteP: "",
        elementsJeu: "",
        elementsJeuP: "",
        patient: "",
        docteur: "",
        pomme: "",
        cheetos: "",
        butJeu: "",
        butJeuP1: "",
        butJeuP2: "",
        butJeuP3: "",
        systemePoints: "",
        systemePointsP1: "",
        systemePointsP2: "",
        mouvement: "",
        mouvementP1: "",
        mouvementP2: "",
        mouvementP3: "",
        commentGagner: "",
        commentGagnerP1: ""
    },

    spanish: {
        // main page
        title: "Doctor vs Paciente",
        //jouer: "Jugar",
        //regles: "Normas",
        
        // rules page
        retour: "",
        reglesDuJeu: "",
        contexte: "",
        contexteP: "",
        elementsJeu: "",
        elementsJeuP: "",
        patient: "",
        docteur: "",
        pomme: "",
        cheetos: "",
        butJeu: "",
        butJeuP1: "",
        butJeuP2: "",
        butJeuP3: "",
        systemePoints: "",
        systemePointsP1: "",
        systemePointsP2: "",
        mouvement: "",
        mouvementP1: "",
        mouvementP2: "",
        mouvementP3: "",
        commentGagner: "",
        commentGagnerP1: ""
    }
}