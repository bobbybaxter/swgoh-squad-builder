# SWGOH Squad Builder
A squad planning and management app for the mobile game Star Wars: Galaxy of Heroes.

[Demo](https://swgoh-squad-builder.firebaseapp.com)

## Screenshots
![image of Star Wars Squad Builder Site](https://raw.githubusercontent.com/bobbybaxter/swgoh-squad-builder/master/src/assets/screenshot1a.png)
![image of Star Wars Squad Builder Site](https://raw.githubusercontent.com/bobbybaxter/swgoh-squad-builder/master/src/assets/screenshot2a.png)

## Installation Instructions
- Clone down this repo
- At the root of the project, run `npm install`
- Create a project in Firebase
  - Add a web app to the project and enable Google authentication
  - Create a real-time database and seed it with the data from the database directory
- Create a file named `/helpers/data/apiKeys.json` and add your Firebase keys using the `apiKeys.example.json` as a template

## How to Run
- In your terminal, type `npm start`

***Note**: if you want to make a production build of this project, type `npm run build`.  This will create a folder called build with all the minified code you need.*

## How to deploy
- In your terminal, type `npm run deploy`
