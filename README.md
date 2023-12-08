# Puissance4
.
├── assets # Contient bootstrap et fichiers css
├── bin # console Symfony
├── config # Contient packages Symfony
├── node_modules # Contient les modules node
├── public
    ├── build #npm
    ├── img # Contient les images necessaire à l'application
    ├── .htaccess # (à créer)
    └── index.php # Controlleur frontal
├── resources
    └── Sujet # Controlleur frontal
        ├── DiagrammeClasse
        ├── Parametres
        └── Sujet
├── src
    ├── Controller
    ├── Entity
    └── Repository
├── templates
    ├── HTMLelements
        ├── body.twig
        ├── footer.twig
        └──header.twig
    ├── accueil
    └── base.twig
├──  .env
├──  .gitignore
├──  README.md
├──  composer.json
├──  composer.lock
├──  package-lock.json
└──  package.json

## Execution du programme

1. Installer la dernière version stable de [Node](https://nodejs.org/en)
2. Cloner le projet
3. Lancer la commande `npm install`
4. Lancer la commande `npm run start`
5. Se rendre sur la page du [Puissance4](http://localhost:8080/)

## Execution des test

1. Lancer la commande `npm run test`