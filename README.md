# fat-doctor-game
the fat doctor and the client game

# Maquettes
Au début, on a voulu créer une simple représentation du jeu pour avoir une idée globale du design, On est donc parti sur Paint pour créer un petit dessin du jeu. Voici le résultat: <br> <br>
![image](https://github.com/yahyamaw311/fat-doctor-game/assets/98132883/d80b08c3-641e-4359-8112-1c45ceb2f6f1)

Dans cette image, les cercles rouges représentent les pommes et les carrés oranges représentent les chips. Les petits bonhommes en bas représentent les deux joueurs. <br>

on a donc pris ce design et on est directement parti le créer sur html car on était content du résultat. <br>

## rendu final
Voici le rendu final du jeu: <br> <br>
![image](https://github.com/yahyamaw311/fat-doctor-game/assets/98132883/aa411696-1053-44e1-8985-f1e999f8b748)

# Guide de conception
## Glossaire
- PixiJs
- Javascript
- html
- css
- Chromecast
- sprite
- library

## principe de base
Pour la création de ce jeu, nous avons créé un site web qui est relié a un script javascript. Le script de ce jeu est basé sur le library (bibliothèque) Pixijs. Il est utilisé pour la création des sprites, le mouvement des objets et la création du jeu en général.

## Actions possibles
Dans ce site, il est possible de: 
1. bouger les personnages de gauche à droite avec les boutons "A" et "D" ainsi que la flèche gauche et droite.
2. consuler le site des règles.

## États possibles
Si aucun des joueurs ne touche aux contrôles, les pommes et les chips vont continuer de tomber, mais seulement aléatoirement. Cela veut dire que l'accumulation des points vont aussi se faire aléatoirement. Si le docteur touche une pomme qui tombe, le nombre de points du docteur (score affiché en haut) baissera de 1. S'il touche un chips, son score montera de 1 et celui de son adversaire (fat) baissera de 1. Pour le fat, s'il touche un chips qui tombe, son score baissera de 1. S'il touche une pomme, son score montera de 1 et celui de son adversaire (fat) baissera de 1.

## Liste des contrôles
<ins>Docteur</ins><br />
"A" pour se déplacer horizontalement à gauche
"D" pour se déplacer horizontalement à droite<br />
ou <br />
Joystick de gauche sur la manette <br />

<ins>Fat</ins><br />
Flèche gauche sur le clavier pour se déplacer horizontalement à gauche
Flèche droite sur le clavier pour se déplacer horizontalement à droite<br />
ou <br />
Joystick de droite sur la manette <br />

Si vous Jouez 

## Limitation des contrôles
Tout les clients ont la même interface. Ce site est seulement disponible sur ordinateur.

## Références
Lors de la création du jeu, nous avons pris de nombreux éléments d'internet. Voici les sites qu'on a consulté et les éléments qu'on a pris du site.

### Images
1. Background
   - nous l'avons pris de google image.
2. les sprites
   - les sprites ont étés pris de [Scratch](https://scratch.mit.edu/projects/editor/?tutorial=getStarted) dans la section des sprites.

### Code
tout ces éléments ont étés pris du site officiel de PIXI JS dans la catégorie tutoriel.
1. Génerer plusieurs sprites
   - [Fish Bond](https://pixijs.com/8.x/tutorials/fish-pond#1)
2. Le mouvement des joueurs
   - [SpineBoy Adventure](https://pixijs.com/8.x/tutorials/spine-boy-adventure)<br />
   
Ces éléments ont étés pris de ces sources respectives
1. L'implémentation de i18n
   - Youtube - VIP Tutorials [Change Language Web Page using JavaScript || JavaScript tutorials Change Language](https://www.youtube.com/watch?v=fWPOD3CAFM8)
2. Implémentation de la manette
   - Alvaro Montaro - [Playing with the Gamepad API](https://alvaromontoro.com/blog/68044/playing-with-the-gamepad-api)
   - Youtube - Coding With Adam [How to use JS Gamepad API and Build a Gamepad Tester in 12 minutes](https://www.youtube.com/watch?v=UXTOXF8Y2Cs)


# Test de 5 secondes
Pour le test de 5 secondes, nous avons eu l'occasion de se faire tester par deux personnes, Artur et Olivier. Voici les résultats

## Artur
Lors des 5 premières secondes, Artur s'est senti submergé de texte et n'a pas pris la peine de lire comme il faut.
Cette réaction était sûrement causé par le stress qu'on lui a donné lors du test; on a chronométré le 5 secondes pour lancer la page et la quitter tout de suite après le 5 secondes donc 
ça lui a mis une pression. Ce qu'on aurait dû faire, c'était de le laisser prendre sont temps et de lui demander ce qu'il a remarqué lors des 5 premières secondes pour enlever le facteur de stress.

## Olivier
Pour olivier, on lui a laissé regarder pendant les 5 premières secondes sans le facteur de stress. Après avoir observé, il nous a dit que la page d'accueil était facile a comprendre mais que ce n'était pas assez
bien développé pour lui. Selon lui, ce serait mieux d'afficher les règles en tout temps sur l'écran. 

# Rapport d'essai
Pour les tests, nous avons soumis au testeurs plusieurs tâches pour vérifier la compréhension globale du site et du jeu. Voici notre tableau de tâches:

|                     | Objectif                | Scenario                                                | Etat final                     | fonctionnalité                         |
|---------------------|-------------------------|---------------------------------------------------------|--------------------------------|----------------------------------------|
|          1          | afficher les règles     | lire le message à l'écran et cliquer sur Non            | la page des règles s'affichera | s'assurer de la connaissance des règles|
|          2          | changer la langue       | cliquer sur les boutons de changement de langue         | la langue change               | changement de langue                   |
|          3          | bouger le joueur        | cliquer sur la flèche droite / flèche gauche / joystick | le joueur bouge                | le mouvement du joueur                 |
|          4          | gagner 5 points         | bouger le joueur et manger les aliments respectifs      | le joueur a 5 points           | le calcul des points                   |

## Résultats
voici les résultats pour les deux testeurs

### Artur
Voici les résultats pour les test de Artur:
|       Tâche             | Réponse                                    | Commentaire                                                                   | Note           |
|-------------------------|--------------------------------------------|-------------------------------------------------------------------------------|----------------|
| afficher les règles     | Ce n'était pas difficile                   | Il  a suggéré de changer la question pour simplifier la compréhension         |  ⭐⭐⭐★★   |
| changer la langue       | Le bouton de langue est facile a remarquer | Il a suggéré d'ajouter des drapeaux                                           |  ⭐⭐⭐⭐★  |
| bouger le joueur        | c'était simple après avoir lu le règlement | Aucun commentaire                                                             |  ⭐⭐⭐⭐⭐ |
| gagner 5 points         | Le système de pointage est bon             | Il a trouvé que le pointage était un peu "Hardcore" mais trouve que c'est bon |  ⭐⭐⭐⭐★  |

### Olivier
Voici les résultats pour les test de Olivier:
|       Tâche             | Réponse                                       | Commentaire                                                                       | Note         |
|-------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------|--------------|
| afficher les règles     | Facile a comprendre la question et où cliquer | Pense que ce serait une meilleure idée d'afficher les règles constament.          | ⭐⭐⭐★★   |
| changer la langue       | Facile de changer la langue                   | Il a suggéré de différentier le style de la langue actuelle et les autres langues | ⭐⭐⭐⭐★  |
| bouger le joueur        | Pas difficile du tout et très intuitif        | Aucun commentaire                                                                 | ⭐⭐⭐⭐⭐ |
| gagner 5 points         | Trouve ça très difficile                      | Il a détesté et trouve que ce serait une meilleure idée de faire un  minuteur     | ⭐⭐★★★    |

## Conclusion
En conclusion, nous pouvons voir que le jeu est assez simple à comprendre et à utiliser; cependant, il est clair qu'on doit améliorer des éléments dans le design et dans notre approche vis-à-vis de l'UX (user experience) tel qu'un décompte avant le début de la partie, des drapeaux pour représenter les pays pour un meilleur visuel ainsi qu'un meilleur design en général.




