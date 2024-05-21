import dictionnary from "./dictionnary.json" with {type: 'json'}

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
        if(document.getElementById(element) != null){
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