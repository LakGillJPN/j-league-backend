<img src="/images\header.jpg" alt="Header" title="Header">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![GitHub last updated (branch)](https://img.shields.io/github/last-commit/LakGillJPN/j-league-predictor) ![GitHub issues](https://img.shields.io/github/issues/LakGillJPN/j-league-predictor) 



The J-League Predictor is an application that allows soccer fans to predicate the outcome of J-League games and earn points for accuracy.

Deployment: https://j-league-predictor.onrender.com/

## Contents
- [Tech-Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Home](#home)
- [Play](#play)
- [Results](#results)
- [Future Features](#future-features)
- [Goals](#goals)

## Tech Stack 

| Task       | Tech        |
| ---------- | ----------- |
| Language  | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  |
| Frontend Framework  | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  |
|  Frontend Testing  | ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)  |
| Backend Framework  | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)   |
|  Backend Testing  | ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)  |
|  User Auth | ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) |
|  Database | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) |





## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LakGillJPN/j-league-predictor.git

   ```

2. Install dependencies:
    
    ```bash
    
    npm install 
    
    ```

3. This application uses Firebase for authentication. Please create a `.env` file and use the `.env.example` file to see what variables are required.

# Usage

The J-League Predictor app utilizes Express for its backend and React for its frontend. To run the app, it is necessary to start the backend server before launching the frontend:

1. Start the Express server:

    ```bash
    
    npm run start
    
    ```
    
2. The Express server will run on  **`http://localhost:4000/`**

3. Move to the Frontend folder:

    ```bash
    
    cd frontend/
    
    ```
4. Start the Frontend server:

    ```bash
    
    npm run start
    
    ```
    
5. The Frontend server will run on  **`http://localhost:3000/`**



# Home
<img src="/images\homepage.jpg" alt="Homepage" title="Homepage">

On the home page we have a carousel wheel displaying all the of the games upcoming in this gameweek.

# Play
<img src="/images\play_page.jpg" alt="Play" title="Play">

In this page, users can make their predication of what they think the score of this week's games will be. After making their predication, a user can alter their predication right up to the deadline.

# Results
<img src="/images\results.jpg" alt="Results" title="Results">

The results of the previous gameweek are compared to the user's predication and awarded points. 

- [ ] Correct Home or Away Score - 30pts
- [ ] Correct Outcome - 50pts
- [ ] Correct Home or Away Score + Correct Outcome - 70pts
- [ ] Correct Home and Away Score + Correct Outcome - 100pts

# Future Features
- [ ] Leaderboard
- [ ] Mobile View
- [ ] Display Names
- [ ] Results of Previous Gameweeks

# Goals
- To have the application fully functional for the start of the next J-League season
- To have the app deployed on either AWS or Heroku


<!---
```
j-league-predictor
├─ .git
├─ .gitignore
├─ backend
│  ├─ index.ts
│  ├─ knex.ts
│  ├─ server.ts
│  └─ tests
│     └─ server.test.ts
├─ db
│  ├─ migrations
│  │  ├─ 20230331132652_fixtures.ts
│  │  ├─ 20230410060443_users.ts
│  │  ├─ 20230415013729_predications.ts
│  │  ├─ 20230415020325_points.ts
│  │  └─ 20230419022140_overall.ts
│  └─ seeds
│     └─ fixture-seed.ts
├─ environment.d.ts
├─ fixtures.ts
├─ frontend
│  ├─ .gitignore
│  ├─ package.json
│  ├─ public
│  │  ├─ images
│  │  │  └─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.tsx
│     ├─ components
│     │  ├─ CountdownTimer.jsx
│     │  ├─ FixturesCarousel.css
│     │  ├─ FixturesCarousel.tsx
│     │  ├─ Footer.css
│     │  ├─ Footer.tsx
│     │  ├─ Header.css
│     │  ├─ Header.tsx
│     │  ├─ Navbar.css
│     │  ├─ Navbar.tsx
│     │  └─ Warning.tsx
│     ├─ context
│     │  ├─ AuthContext.tsx
│     │  └─ ProtectedRoute.tsx
│     ├─ firebase
│     │  └─ firebase.ts
│     ├─ fonts
│     │  └─ j-league
│     │     ├─ JLEAGUEKICK-BoldCondensed.eot
│     │     ├─ JLEAGUEKICK-BoldCondensed.ttf
│     │     ├─ JLEAGUEKICK-BoldCondensed.woff
│     │     ├─ JLEAGUEKICK-BoldCondensed.woff2
│     │     └─ stylesheet.css
│     ├─ index.css
│     ├─ index.tsx
│     ├─ pages
│     │  ├─ Home.css
│     │  ├─ Home.tsx
│     │  ├─ Login.css
│     │  ├─ Login.tsx
│     │  ├─ Play.css
│     │  ├─ Play.tsx
│     │  ├─ Results.css
│     │  ├─ Results.tsx
│     │  ├─ SignUp.css
│     │  ├─ SignUp.tsx
│     │  ├─ Submitted.css
│     │  └─ Submitted.tsx
│     └─ utils
│        ├─ get-date.ts
│        ├─ get-fixtures.ts
│        ├─ get-gameweek.ts
│        ├─ get-predications.ts
│        ├─ get-results.ts
│        ├─ get-total.ts
│        └─ scoreGen.ts
├─ globals.d.ts
├─ images
│  ├─ header.jpg
│  ├─ homepage.jpg
│  ├─ jleague favicon.png
│  ├─ play_page.jpg
│  └─ results.jpg
├─ jest.config.js
├─ knexfile.ts
├─ package.json
├─ README.md
└─ tsconfig.json

```
--->