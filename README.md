<img src="/images\frontend-header-white.jpg" alt="Header" title="Header">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![GitHub last updated (branch)](https://img.shields.io/github/last-commit/LakGillJPN/j-league-backend) ![GitHub issues](https://img.shields.io/github/issues/LakGillJPN/j-league-backend) 

For the Frontend Repository, [click here](https://github.com/LakGillJPN/j-league-predictor)

The J-League Predictor is an application that allows soccer fans to predict the outcome of J-League games and earn points for accuracy.

Deployment: https://j-league-predictor.vercel.app/

## Contents
- [Tech-Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)


## Tech Stack 

| Task       | Tech        |
| ---------- | ----------- |
| Language  | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  |
|  Framework  | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)   |
|  Testing  | ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)  |
|  Database | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) |

Click [here](https://github.com/LakGillJPN/j-league-predictor#tech-stack) for the Frontend Tech Stack 




## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LakGillJPN/j-league-predictor.git

   ```

2. Install dependencies:
    
    ```bash
    
    npm install 
    
    ```

# Usage

The J-League Predictor app utilizes Express for its backend and React for its frontend. For the Frontend instructions, click [here](https://github.com/LakGillJPN/j-league-predictor#usage).

Start the Express server:

  ```bash  
 npm run start  
 ```
    
The Express server will run on  **`http://localhost:4000/`**



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
