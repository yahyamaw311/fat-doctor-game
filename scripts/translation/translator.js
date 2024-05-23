import dictionnary from "./dictionnary.json" with {type: 'json'}

const langChoices = document.querySelector(".langChoices")
const languagelist = document.querySelectorAll('a')

window.onload = () => {
    var storedLang = localStorage.getItem("language")
    if (storedLang != null) {
        translateWebsite(storedLang)
        langChoices.querySelector('[language=' + storedLang + ']').classList.add('active')
    } else {
        localStorage.setItem("language", "french")
    }
}

languagelist.forEach(lang => {
    lang.addEventListener('click', () => {

        // remove active from last active language and put it in the new active language
        langChoices.querySelector('.active').classList.remove('active')
        lang.classList.add('active')

        // get the chosen language
        const languageChosen = lang.getAttribute('language')

        //store the language
        if (languageChosen != null) {
            localStorage.setItem("language", languageChosen)
        }

        // replace every element of the page
        translateWebsite(languageChosen)
    })
})

function translateWebsite(languageChosen) {
    for (var element in dictionnary[languageChosen]) {
        if (document.getElementById(element) != null) {
            document.getElementById(element).textContent = dictionnary[languageChosen][element]
        }
    }
}