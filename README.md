# App_React-Native

## Description

Bienvenue dans **App_React-Native**, une application mobile développée avec React Native et Expo. Ce projet inclut les fonctionnalités de base pour le démarrage d'une application mobile, y compris les écrans de connexion et d'inscription, et l'intégration avec Prisma pour la gestion de la base de données.

## Structure du Projet

Le projet est organisé comme suit :

- `expo-shared/` : Contient les configurations partagées pour Expo.
- `.idea/` : Fichiers de configuration pour l'IDE.
- `assets/` : Ressources statiques comme les images et les icônes.
- `components/containers/` : Composants réutilisables pour la structure de l'application.
- `.gitignore` : Fichier pour ignorer les dossiers et fichiers spécifiques dans Git.
- `App.js` : Point d'entrée principal de l'application.
- `app.json` : Configuration de l'application Expo.
- `babel.config.js` : Configuration pour Babel.
- `package.json` : Dépendances et scripts pour le projet.
- `yarn.lock` : Verrouillage des dépendances pour Yarn.

## Commits

Voici les différents commits effectués pour ce projet :

- **first commit** : Initialisation du dépôt avec le fichier README.
- **Created a new Expo app** : Ajout des configurations et ressources de base pour Expo.
- **Demarrage du projet + Login, Signup, Auth** : Ajout des fonctionnalités d'authentification (connexion et inscription).

## Installation

Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

1. Clonez le dépôt :
    ```sh
    git clone git@github.com:tbasdev57/App_React-Native.git
    cd App_React-Native
    ```

2. Installez les dépendances :
    ```sh
    yarn install
    ```

3. Démarrez l'application :
    ```sh
    expo start
    ```

## Configuration

Assurez-vous de créer un fichier `.env` en suivant l'exemple fourni dans `.env.example` pour configurer les variables d'environnement nécessaires.

## Fonctionnalités

- **Login et Signup** : Les utilisateurs peuvent créer un compte et se connecter.
- **Auth** : Gestion de l'authentification des utilisateurs.
- **Prisma** : Utilisation de Prisma pour la gestion des données.

## Technologies Utilisées

- **React Native** : Framework pour développer des applications mobiles.
- **Expo** : Outils et services pour développer et construire des applications React Native.
- **Prisma** : ORM pour gérer et interagir avec la base de données.
- **Yarn** : Gestionnaire de paquets pour installer les dépendances du projet.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer, suivez ces étapes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5. Ouvrez une Pull Request.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

## Auteur

Développé par [tbasdev57](https://github.com/tbasdev57).
