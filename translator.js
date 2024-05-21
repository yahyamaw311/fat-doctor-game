
const langChoices = document.querySelector(".langChoices")
const languagelist = document.querySelectorAll('a')

languagelist.forEach(lang => {
    lang.addEventListener('click', () => {

        // remove active from last active language and put it in the new active language
        langChoices.querySelector('.active').classList.remove('active')
        lang.classList.add('active')

        // get the chosen language
        const languageChosen = lang.getAttribute('language')

        // replace every element of the page
        for(var element in dictionnary[languageChosen]){
            if(dictionnary[languageChosen].hasOwnProperty(element)){
                document.getElementById(element).textContent = dictionnary[languageChosen][element]
            }
        }

    })
})

const dictionnary = {
    french: {
        title: "docteur vs Patient",
        jouer: "jouer",
        regles: "règles"
    },

    english: {
        title: "doctor vs patient",
        jouer: "play",
        regles: "rules"
    },

    spanish: {
        title: "doctor vs paciente",
        jouer: "jugar",
        regles: "normas"
    }
}