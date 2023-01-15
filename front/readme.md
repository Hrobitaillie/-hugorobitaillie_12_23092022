# Sportsee - New front-end version's user's profile page
Sportsee is a site allowing users to follow their sports activities and their energy expenditure thanks to precise statistics of their sessions.

_The goal of this project is to use and integrate an API with React, to know how to use Proptypes as well as a graphics library and to know how to use JSDoc_

## 1. Webdesign
You can find the webdesign on  [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR)

![webdesign](https://github.com/Hrobitaillie/hugorobitaillie_12_23092022/blob/main/mignature.jpg)

## 2. Prerequisites

+ NodeJS
+ npm
+ Axios 0.27.2
+ Create React App 5.0.1
+ Prop-types 15.8.1
+ React 18.2.0
+ React-dom 18.2.0
+ React-query 3.39.2
+ Recharts 2.1.14

## 3. Installation

### 3.1 Front-end

+ Clone the repository

    `git clone https://github.com/Hrobitaillie/hugorobitaillie_12_23092022.git`

+ Install the dependencies

    `yarn`

+ Launch the project

    `yarn dev`

Now the app will start in development mode, you can acces to the website at [http://localhost:3000]( http://localhost:3000)

To launch de project in production mode, just use this command line

+ Launch the project

    `yarn prod`

### 3.2 Back-end

### 3.2.1 Installation

You can access to the backend repository [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and follow his readme to get instructions about it and documentation, or follow those steps.

+ Clone the repository

    `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`

+ Install the dependencies

    `yarn`

+ Launch the project
    
    In **_app/index.js_**, you have to change port to have a different one as the front-end, put it at to match with front end API fetching url **_3001_**.

    `yarn dev`

### 3.2.2 Endpoints
### 3.2.2.1 Possible endpoints

This project includes four endpoints that you will be able to use:

+ `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
+ `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
+ `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
+ `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

### 3.2.2.2 Examples of queries
+ `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
+ `http://localhost:3000/user/18` - Retrieves user 18's main information.