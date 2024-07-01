# Gestion des Tâches

## Introduction

Cette application de gestion des tâches permet aux utilisateurs de créer, lire, mettre à jour et supprimer des tâches. Elle comprend une interface utilisateur pour gérer les tâches et une vue de la timeline pour afficher les tâches en fonction de leur date et heure.

## Fonctionnalités

- Ajouter une tâche
- Mettre à jour une tâche
- Supprimer une tâche
- Afficher une liste de tâches
- Afficher une timeline des tâches
- Utilisation d'un backend simulé avec JSON Server

## Stack Technique

- **Frontend**: React, JavaScript, HTML, CSS
- **Gestion d'État**: Context API 
- **Routing**: React Router
- **Styling**: tailwindcss
- **Backend Mock**: JSON Server


## Prérequis

- Node.js
- npm (Node Package Manager)
- Git

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/nazihared/TasksManager.git
   cd TasksManager

2. **Installer les dépendances**
   
   ```bash
   npm install
   
## Démarrage du projet

1. **Démarrer le serveur JSON**

   ```bash
   npm run server

   Cela démarrera un serveur JSON à l'adresse http://localhost:5000/tasks .
   
2. **Démarrer l'application React**
   
   ```bash
   npm start

   Cela démarrera l'application React à l'adresse http://localhost:3000.

## Structure des Dossiers

**public/** : Contient les fichiers publics de l'application, comme index.html.

**src/** : Contient les fichiers sources de l'application React.

**components/** : Contient les composants React utilisés dans l'application.
    **TaskForm.js** : Composant pour ajouter et éditer des tâches.
    **TaskItem.js** : Composant pour afficher une tâche individuelle.
    **TaskList.js** : Composant pour afficher la liste des tâches.
    
**context/** : Contient le contexte de l'application pour la gestion des états globaux.

**TaskContext.js** : Contexte pour les tâches.

**pages/** : Contient les pages de l'application.
    **TaskPage.js** : Page principale pour la gestion des tâches.
    **TimelinePage.js** : Page pour afficher la timeline des tâches.
    
**App.js** : Composant principal de l'application.

## Utilisation

### Ajouter une tâche

1. Cliquez sur le bouton "Ajouter" pour afficher le formulaire d'ajout de tâche.
2. Remplissez les informations de la tâche (titre, description, date, heure).
3. Cliquez sur le bouton "Ajouter" pour enregistrer la tâche.

### Mettre à jour une tâche

1. Cliquez sur  le bouton "Modifier" à côté de la tâche que vous souhaitez mettre à jour.
2. Modifiez les informations de la tâche.
3. Cliquez sur le bouton "Enregistrer" pour enregistrer les modifications.

### Supprimer une tâche

1. Cliquez sur le bouton "Supprimer" à côté de la tâche que vous souhaitez supprimer.
2. Confirmez la suppression.

### Afficher la timeline des tâches

1. Cliquez sur l'icône de la timeline en haut de la page pour accéder à la vue de la timeline.
2. Faites défiler la timeline pour voir les tâches passées et à venir.

## Contribution
Les contributions sont les bienvenues ! Veuillez soumettre une pull request pour toute amélioration ou correction.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Auteur
Nom: Naziha 
GitHub: https://github.com/nazihared/TasksManager.git


