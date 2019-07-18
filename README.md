# git-docker
Projet pédagogique pour apprendre à utiliser Git & Docker

## Versioning
Nous avons opter pour la méthode Basic Flow car nous travaillons sur un tout petit projet avec une taille d'équipe réduite. C'est donc la méthode la plus adaptée.

## Fonctionnalités de l’application
Ce petit projet permet de faire tourner un serveur Node.js capable de servir des pages HTML dynamiques avec le template EJS et d'autres pages completement statiques. La page par défaut est donnée par la route en "/".  
A partir de cette page, on peut lister des items et les enregister dans une base MongoDB.  
Cette page contient deux liens "About" et "Contact" servis par le serveur Node.js

## Déploiement
Lancer l'application :   
**docker-compose up**  
utiliser le flag **-d** pour le lancer en fond

Arrêter l'application :  
**docker-compose down***

## Contribuer
Lancer l'application :   
**docker-compose up**  
utiliser le flag **-d** pour le lancer en fond

Arrêter l'application :  
**docker-compose down**

To be able to edit files, add volume to compose file  
**volumes: ['./:/usr/src/app']**

To re-build  
**docker-compose build**

## Tests logiciels
Les tests logiciels se trouvent dans le répertoire ./tests, ils nécessitent Cypress
