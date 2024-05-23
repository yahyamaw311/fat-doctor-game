# Doctor vs Patient - Avoid your poison !

## Maquettes
Au début, on a voulu créer une simple représentation du jeu pour avoir une idée globale du design, on est donc parti sur Paint pour créer un petit dessin du jeu. Voici le résultat: <br> <br>
![image](https://github.com/yahyamaw311/fat-doctor-game/assets/98132883/d80b08c3-641e-4359-8112-1c45ceb2f6f1)

Dans cette image, les cercles rouges représentent les pommes et les carrés orange représentent les chips. Les petits bonhommes en bas représentent les deux joueurs. <br>

On a donc pris ce design et on est directement parti le créer sur HTML, car on était content du résultat. <br>

## Rendu final
Voici le rendu final du jeu: <br> <br>
![image](https://github.com/yahyamaw311/fat-doctor-game/assets/98132883/aa411696-1053-44e1-8985-f1e999f8b748)

# Guide de conception
## Glossaire
- PixiJs
- Javascript
- Html
- CSS
- Chromecast
- Sprite
- Library

## Principe de base
Pour la création de ce jeu, nous avons créé un site web qui est relié à un script JavaScript. Le script de ce jeu est basé sur le library (bibliothèque) Pixijs. Il est utilisé pour la création des sprites, le mouvement des objets et la création du jeu en général.

## Actions possibles
Dans ce site, il est possible de: 
1. bouger les personnages de gauche à droite avec les boutons "A" et "D" ainsi que la flèche gauche et droite.
2. consulter le site des règles.

## États possibles
Si aucun des joueurs ne touche aux contrôles, les pommes et les chips vont continuer de tomber, mais seulement aléatoirement. Cela veut dire que l'accumulation des points va aussi se faire aléatoirement. Si le docteur touche une pomme qui tombe, le nombre de points du docteur (score affiché en haut) baissera de 1. S'il touche un chips, son score montera de 1 et celui de son adversaire (fat) baissera de 1. Pour le fat, s'il touche un chips qui tombe, son score baissera de 1. S'il touche une pomme, son score montera de 1 et celui de son adversaire (fat) baissera de 1.

## Liste des contrôles
#### <ins>Docteur</ins><br />
"A" pour se déplacer horizontalement à gauche
"D" pour se déplacer horizontalement à droite<br />
ou <br />
Joystick de gauche sur la manette <br />

#### <ins>Patient</ins><br />
Flèche gauche sur le clavier pour se déplacer horizontalement à gauche
Flèche droite sur le clavier pour se déplacer horizontalement à droite<br />
ou <br />
Joystick de droite sur la manette <br />

Si vous jouez 

## Limitation des contrôles
Tous les clients ont la même interface. Ce site est seulement disponible sur ordinateur.

## Références
Lors de la création du jeu, nous avons pris de nombreux éléments d'internet. Voici les sites qu'on a consultés et les éléments qu'on a pris du site.

### Images
1. Background
   - Pris de google image.
2. Sprites
   - Pris de [Scratch](https://scratch.mit.edu/projects/editor/?tutorial=getStarted) dans la section des sprites.

### Code
Tous ces éléments ont été pris du site officiel de PIXI JS dans la catégorie tutoriel.
1. Générer plusieurs sprites
   - [Fish Bond](https://pixijs.com/8.x/tutorials/fish-pond#1)
2. Le mouvement des joueurs
   - [SpineBoy Adventure](https://pixijs.com/8.x/tutorials/spine-boy-adventure)<br />
   
Ces éléments ont été pris de ces sources respectives
1. L'implémentation de i18n
   - Youtube - VIP Tutorials [Change Language Web Page using JavaScript || JavaScript tutorials Change Language](https://www.youtube.com/watch?v=fWPOD3CAFM8)
2. Implémentation de la manette
   - Alvaro Montaro - [Playing with the Gamepad API](https://alvaromontoro.com/blog/68044/playing-with-the-gamepad-api)
   - Youtube - Coding With Adam [How to use JS Gamepad API and Build a Gamepad Tester in 12 minutes](https://www.youtube.com/watch?v=UXTOXF8Y2Cs)


# Test de 5 secondes
Pour le test de 5 secondes, nous avons eu l'occasion de se faire tester par deux personnes, Artur et Olivier. Voici les résultats.

## Artur
Lors des 5 premières secondes, Artur s'était senti submergé de texte et n'a pas pris la peine de lire comme il faut.
Cette réaction était sûrement causée par le stress qu'on lui a donné lors du test; on a chronométré les 5 secondes pour lancer la page et la quitter tout de suite après les 5 secondes donc 
ça lui a mis une pression. Ce qu'on aurait dû faire, c'était de le laisser prendre son temps et de lui demander ce qu'il a remarqué lors des 5 premières secondes pour enlever le facteur de stress
De plus, lorsqu'il est allé sur la page de règlemenent, il y avait beaucoup de texte qui s'était présenté devant lui, ce qui rendait la compréhension du contenu difficile, étant donné qu'on ne mettait pas
beacoup d'images ni de symboles. Un autre problème était les boutons pour changer les règles, car ils n'étaient pas assez intuitifs. En effet, à première vue, Arthur ne savait pas à quoi servait les boutons
durant les 5 secondes, et avait donc proposé de rajouter des images de drapeau sur les boutons pour que ça ressorte plus sur les yeux.

## Olivier
Pour Olivier, on lui a laissé regarder pendant les 5 premières secondes sans le facteur de stress. Après avoir observé, il nous a dit que la page d'accueil était facile à comprendre, mais que ce n'était pas assez
bien développé pour lui. Selon lui, ce serait mieux d'afficher les règles en tout temps sur l'écran, mis sur le côté.

# Rapport d'essai
Pour les tests, nous avons soumis aux testeurs plusieurs tâches pour vérifier la compréhension globale du site et du jeu. Voici notre tableau de tâches:

|                     | Objectif                | Scenario                                                | État final                     | Fonctionnalité                         |
|---------------------|-------------------------|---------------------------------------------------------|--------------------------------|----------------------------------------|
|          1          | Afficher les règles     | Lire le message à l'écran et cliquer sur Non            | La page des règles s'affichera | S'assurer de la connaissance des règles|
|          2          | Changer la langue       | Cliquer sur les boutons de changement de langue         | La langue change               | Changement de langue                   |
|          3          | Bouger le joueur        | Cliquer sur la flèche droite / flèche gauche / joystick | Le joueur bouge                | Le mouvement du joueur                 |
|          4          | Gagner 5 points         | Bouger le joueur et manger les aliments respectifs      | Le joueur a 5 points           | Le calcul des points                   |


## Résultats
Voici les résultats pour les deux testeurs

### Artur
Voici les résultats pour les tests de Arthur:
|       Tâche             | Réponse                                    | Commentaire                                                                   | Note           |
|-------------------------|--------------------------------------------|-------------------------------------------------------------------------------|----------------|
| Afficher les règles     | Ce n'était pas difficile                   | Il a suggéré de changer la question pour simplifier la compréhension         |  ⭐⭐⭐★★   |
| Changer la langue       | Le bouton de langue est facile à remarquer | Il a suggéré d'ajouter des drapeaux                                           |  ⭐⭐⭐⭐★  |
| Bouger le joueur        | C'était simple après avoir lu le règlement | Aucun commentaire                                                             |  ⭐⭐⭐⭐⭐ |
| Gagner 5 points         | Le système de pointage est bon             | Il a trouvé que le pointage était un peu "hardcore", mais trouve que c'est bon |  ⭐⭐⭐⭐★  |

### Olivier
Voici les résultats pour les tests d'Olivier:
|       Tâche             | Réponse                                       | Commentaire                                                                       | Note         |
|-------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------|--------------|
| Afficher les règles     | Facile à comprendre la question et où cliquer | Pense que ce serait une meilleure idée d'afficher les règles constamment.          | ⭐⭐⭐★★   |
| Changer la langue       | Facile de changer la langue                   | Il a suggéré de différentier le style de la langue actuelle et les autres langues | ⭐⭐⭐⭐★  |
| Bouger le joueur        | Pas difficile du tout et très intuitif        | Aucun commentaire                                                                 | ⭐⭐⭐⭐⭐ |
| Gagner 5 points         | Trouve ça très difficile                      | Il a détesté et trouvé que ce serait une meilleure idée d'utiliser un mineuteur     | ⭐⭐★★★    |

## Conclusion
En conclusion, nous pouvons voir que le jeu est assez simple à comprendre et à utiliser; cependant, il est clair qu'on doit améliorer des éléments dans le design et dans notre approche vis-à-vis de l'UX (user experience) tel qu'un décompte avant le début de la partie, des drapeaux pour représenter les pays pour un meilleur visuel ainsi qu'un meilleur design en général.




