# Card Game Experiment (Feathers.js)
An experiment of creating a utility app for a card game I play with my housemates using Feathers.js.

## Current Status
* Finished App Function (logout and styles)
* Structuring Lobby Page

## Finished
- [x] ~~Initialization~~
    - [x] ~~Server Initialization~~
    - [x] ~~Web App Initialization~~
- [ ] **Web App Development**
    - [x] ~~Environment Setup~~
        - [x] ~~React Router Setup~~
        - [x] ~~Redux Setup~~
    - [x] ~~Login Page + SignUp Page~~
        - [x] ~~Server Authentication~~
        - [x] ~~Linking Web Client with Feathers Server~~
        - [x] ~~Page Authentication~~
        - [x] ~~App (Container)~~

## Todos
* Core:
    - [ ] **Web App Development**
        - [ ] **Lobby Page**
        - [ ] Create Room Page
        - [ ] Room Page
        - [ ] Gaming Page
        - [ ] Profile Page
        - [ ] Game Record Page
    - [ ] Native App Development
    
## Logs
* As feathers-reduxify-authentication requires user to have isVerified element, isVerified element is added by using users before hooks.
* As feathers-authentication 0.7 does not support user login logout event at the server side and client side, I have to manually modify the core to add that function (only to the client-side).
