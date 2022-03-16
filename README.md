![WealthHealth](/src/assets/logos/wealthhealth.webp)

# OPENCLASSROOMS PROJECT 14 *(English)*

# Wealth Health

Open website at [Wealth Health](……..)

## Faites passer une librairie jQuery vers React

## Scenario
Wealth Health is a large financial company who uses an internal web application, called HRnet that manages employee records. The application is old and uses jQuery on the front end, which leads to considerable bugs and increased internal complaints. 
The biggest issues for HRnet users are date pickers, modal windows, drop down menus, and tables. Several complaints that the jQuery plugins are very slow have been received.
The company wants to create their own React components instead of these third-party jQuery plugins that are used in the user interface and hope that converting these jQuery plugins into React components will improve the performance and stability.  
As Management doesn't want this first part of the conversion process to take too long, pick ONE of the four jQuery plugins and convert it to a React component.

## Objective

### HRNet project conversion
•	The whole HRNet application has to be converted to React.
•	Make a new version of the "Create Employee" and "Employee List" pages with React.
•	Add a state management system (the current version uses local storage).
•	Make sure that everything is consistent in style. No need to redesign the application, but if so, change the style to something more modern.  
•	If time, test the React code with a unit test suite. Otherwise, only manual tests are needed. 

### Plugin conversion
Here is the list of currently used jQuery plugins that need to be converted: 
•	Date picker plugin
•	Modal window plugin - jQuery.modal.js
•	Drop down menus
•	Plugin for data tables

### Performance testing
•	The company wants to measure quantifiable data (e.g. page load times, network calls) to ensure that converting the app to React actually improves performance. To do this, do Lighthouse performance audits. To compare, do one for the current jQuery HRnet application, and then another once the application and the chosen jQuery plugin are converted to React.
•	Once the HRnet app in React is working, publish the React component to npm as a package and share the link it can used later if needed.

## Technical constraints
•	Follow a functional programming paradigm when writing these libraries in React.
•	Avoid using classes when you convert the old application. 
•	Write smaller, modular pieces of code and standalone functions for optimal modularity and maintainability. 
•	When converting a jQuery plugin to a React component, keep in mind to convert only the code that deals with the actual functionality of the plugin's user interface. For example, if you convert a jQuery plugin for a modal window, focus on creating a React component that works as a modal window, and nothing else.
•	Document the converted React component with a general description of what the component does and comments explaining what each accessory is for and how it is used.

## Skills
- [x] Redesign an application to reduce technical debt
- [x] Analyze the performance of a web application
- [x] Deploy a front-end application
- [x] Programming in JavaScript with functional programming

# Installation *(English)*

## Prerequisites
- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## Dependencies
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom] (https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts] (https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [React-table](https://react-table.tanstack.com/) Version 7.7.0
- [Redux]( https://www.npmjs.com/package/redux) Version 4.1.2
- [Redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) Version 1.7.2
- [React-redux] (https://www.npmjs.com/package/react-redux) Version 7.2.6
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Testing-library/user-event]https://testing-library.com/docs/ecosystem-user-event/) Version 13.5.0
- [react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens) Version 0.1.1

## Installing and running the project
- Clone the repository onto your computer :
  `git clone https://github.com/Stevens-Mark/StevensMark_P14_04022022-`

- Inside this repository, install the packages/dependencies :
 `npm install`

- Run the Api:
 `npm start`

The App runs on http://localhost:3000/

## Plugin conversion
The convert plugin can be found here:
[react-custom-modal-by-msparkystevens](https://www.npmjs.com/package/react-custom-modal-by-msparkystevens)

