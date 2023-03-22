![WealthHealth](/src/assets/logos/WealthHealth.webp)


# Wealth Health (US version mm/dd/yyyy)

This version uses the US date format of mm/dd/yyyy (instead of dd/mm/yyyy) and includes a custom "date picker" instead of the native "date picker" of React.

## Switch a jQuery library to React

## Scenario
Wealth Health is a large financial company who uses an internal web application, called HRnet that manages employee records. The application is old and uses jQuery on the front end, which leads to considerable bugs and increased internal complaints. 
The biggest issues for HRnet users are date pickers, modal windows, drop down menus, and tables. Several complaints that the jQuery plugins are very slow have been received.
The company wants to create their own React components instead of these third-party jQuery plugins that are used in the user interface and hope that converting these jQuery plugins into React components will improve the performance and stability.  
As Management doesn't want this first part of the conversion process to take too long, pick ONE of the four jQuery plugins and convert it to a React component.

## Objective

### HRNet project conversion
-	The whole HRNet application has to be converted to React.
-	Make a new version of the "Create Employee" and "Employee List" pages with React.
-	Add a state management system (the current version uses local storage).
-	Make sure that everything is consistent in style. No need to redesign the application, but if so, change the style to something more modern.  
-	If time, test the React code with a unit test suite. Otherwise, only manual tests are needed. 

### Plugin conversion
Here is the list of currently used jQuery plugins that need to be converted: 
-	Date picker plugin
-	Modal window plugin - jQuery.modal.js
-	Drop down menus
-	Plugin for data tables

### Performance testing
-	The company wants to measure quantifiable data (e.g. page load times, network calls) to ensure that converting the app to React actually improves performance. To do this, do Lighthouse performance audits. To compare, do one for the current jQuery HRnet application, and then another once the application and the chosen jQuery plugin are converted to React.
-	Once the HRnet app in React is working, publish the React component to npm as a package and share the link it can used later if needed.

## Technical constraints
-	Follow a functional programming paradigm when writing these libraries in React.
-	Avoid using classes when you convert the old application. 
-	Write smaller, modular pieces of code and standalone functions for optimal modularity and maintainability. 
-	When converting a jQuery plugin to a React component, keep in mind to convert only the code that deals with the actual functionality of the plugin's user interface. For example, if you convert a jQuery plugin for a modal window, focus on creating a React component that works as a modal window, and nothing else.
-	Document the converted React component with a general description of what the component does and comments explaining what each accessory is for and how it is used.

## Here is a summary of the main tasks: 
- Convert the entire HRNet project to React. 
- Convert one of the four current jQuery plugins to React. Replace the 3 remaining jQuery plugins with React components. 
- Perform Lighthouse performance tests comparing the old and new application. 

## Skills
- [x] Redesign an application to reduce technical debt
- [x] Analyze the performance of a web application
- [x] Deploy a front-end application
- [x] Programming in JavaScript with functional programming

# Installation *(English)*

## Prerequisites
- [NodeJS](https://nodejs.org/en/) Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## Dependencies
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts](https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [React-table](https://react-table.tanstack.com/) Version 7.7.0
- [React-DatePicker](https://www.npmjs.com/package/react-datepicker) Version 4.7.0
- [Redux](https://www.npmjs.com/package/redux) Version 4.1.2
- [Redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) Version 1.7.2
- [React-redux](https://www.npmjs.com/package/react-redux) Version 7.2.6
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/) Version 13.5.0
- [react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens) Version 0.1.1

## Installing and running the project
- Clone the repository onto your computer : branch usversion

- Inside this repository, install the packages/dependencies :
 `npm install`

- Run the Api:
 `npm start`

The App runs on http://localhost:3000/


## My coverted Plugin (npm package)

The converted plugin can be found here:
[react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens)


**Plugin Demo**
[Demo](https://reactcustommodal.netlify.app/)

## Notes
- If you DIRECTLY create new employee records from the home page, then ONLY these records will be displayed in the table. BUT if you pass to the VIEW of the current employee records FIRST, then mock data will be loaded into the table to demonstrate the site functionality (this data will be put into your local storage, so you may want to remove it afterwards).
- The site uses REDUX as a state management system, but local storage has also been used so state persists between site reloads.



# Wealth Health (version US mm/dd/yyyy)

Cette version utilise le format de date américain mm/dd/yyyy (au lieu de dd/mm/yyyy) et inclut un "date picker" personnalisé au lieu du "date picker" natif de React.

## Faites passer une librairie jQuery vers React


## Scénario
Wealth Health est une grande société financière qui utilise une application web interne, appelée HRnet, pour gérer les dossiers des employés. L'application est ancienne et utilise jQuery sur le front-end, ce qui entraîne des bogues considérables et une augmentation des plaintes internes. 
Les plus gros problèmes pour les utilisateurs de HRnet sont les sélecteurs de date, les fenêtres modales, les menus déroulants et les tableaux. Plusieurs plaintes selon lesquelles les plugins jQuery sont très lents ont été reçues.
L'entreprise veut créer ses propres composants React au lieu de ces plugins jQuery tiers qui sont utilisés dans l'interface utilisateur et espère que la conversion de ces plugins jQuery en composants React améliorera les performances et la stabilité.  
Comme la direction ne veut pas que cette première partie du processus de conversion prenne trop de temps, choisissez UN des quatre plugins jQuery et convertissez-le en composant React.


## Objectif

### Conversion du projet HRNet 
- L'ensemble de l'application HRNet doit être converti en React.
- Faire une nouvelle version des pages "Créer un employé" et "Liste des employés" avec React.
- Ajouter un système de gestion des états (la version actuelle utilise le stockage local).
- Veillez à ce que tout soit cohérent en termes de style. Pas besoin de redessiner l'application, mais si c'est le cas, changez le style pour quelque chose de plus moderne.  
- Si le temps le permet, testez le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires. 


### Conversion des plugins
Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis : 
- Plugin de sélection de date
- Plugin de fenêtre modale - jQuery.modal.js
- Menus déroulants
- Plugin pour les tables de données

### Tests de performance
- L'entreprise veut mesurer des données quantifiables (par exemple, les temps de chargement des pages, les appels réseau) pour s'assurer que la conversion de l'appli à React améliore réellement les performances. Pour ce faire, effectuez des audits de performance Lighthouse. Pour comparer, faites-en un pour l'application HRnet actuelle en jQuery, puis un autre une fois que l'application et le plugin jQuery choisi sont convertis en React.
- Une fois que l'application HRnet en React fonctionne, publiez le composant React sur npm en tant que package et partagez le lien qui pourra être utilisé ultérieurement si nécessaire.


## Contraintes techniques
- Suivez un paradigme de programmation fonctionnelle lorsque vous écrivez ces bibliothèques en React.
- Évitez d'utiliser des classes lorsque vous convertissez l'ancienne application. 
- Écrivez des morceaux de code plus petits et modulaires et des fonctions autonomes pour une modularité et une maintenabilité optimales. 
- Lorsque vous convertissez un plugin jQuery en composant React, gardez à l'esprit de ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin. Par exemple, si vous convertissez un plugin jQuery pour une fenêtre modale, concentrez-vous sur la création d'un composant React qui fonctionne comme une fenêtre modale, et rien d'autre.
- Documentez le composant React converti avec une description générale de ce que fait le composant et des commentaires expliquant à quoi sert chaque accessoire et comment il est utilisé.

## Voici un récapitulatif des principales tâches : 
- Convertir l'ensemble du projet HRNet en React. 
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React. 
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application. 

## Skills
- [x] Refondre une application pour réduire la dette technique
- [x] Analyser la performance d'une application web
- [x] Déployer une application front-end
- [x] Programmer en JavaScript avec la programmation fonctionnelle

# Installation *(français)*

## Prérequis
- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) ou un autre IDE de votre choix

## Dépendances
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts](https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [React-table](https://react-table.tanstack.com/) Version 7.7.0
- [Redux]( https://www.npmjs.com/package/redux) Version 4.1.2
- [Redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) Version 1.7.2
- [React-redux](https://www.npmjs.com/package/react-redux) Version 7.2.6
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/) Version 13.5.0
- [react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens) Version 0.1.1

## Installer et exécuter le projet
- Clonez le repo sur votre ordinateur : branche usversion

- Dans ce dépôt, installez les paquets/dépendances :
 `npm install`

- Run the Api:
 `npm start`

The App runs on http://localhost:3000/


## Mon plugin (npm package)

Le plugin converti peut être trouvé ici :
[react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens)


**Plugin Demo**
[Demo](https://reactcustommodal.netlify.app/)

## Notes
- Si vous créez directement de nouveaux enregistrements d'employés à partir de la page d'accueil, SEULS ces enregistrements seront affichés dans la table. MAIS si vous passez d'abord à la VUE des enregistrements actuels des employés, alors des données factices seront chargées dans le tableau pour démontrer la fonctionnalité du site (ces données seront placées dans votre stockage local, donc vous voudrez peut-être les supprimer par la suite).
- Le site utilise REDUX comme système de gestion d'état, mais le stockage local a également été utilisé pour que l'état persiste entre les rechargements du site.