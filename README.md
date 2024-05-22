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
