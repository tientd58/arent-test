### ARENT Test Front-end: HEALTHY (Author: Tien Trinh Dinh)

- This is a sample health website, a simple template project Reactjs with javascript, the main features are: 
1. Login
2. Register
3. Show meal history, body weight - body fat percentage graph
4. Show body record by line chart, your exercise, and your diary in food and daily menu
5. Show recommendation with post about food and nutrition.

- Main scenario:
1. The user is not logged in: just show recommendation page with header include login button, User must register and login to view more information
2. Logged in users: can view all page with full information. Currently we have 3 main function pages: top page, recommendation page and record page

- Technical: [Reactjs](https://reactjs.org), [Redux Toolkit](https://redux-toolkit.js.org/), [Reselect](https://github.com/reduxjs/reselect), [Bootstrap v5](https://getbootstrap.com/), [formik](https://formik.org/), [Axios](https://axios-http.com/docs/intro) ...etc

## Development Environment
- Node.js: version 18.16.0
- Reactjs: version ^18.2.0
- yarn: version 1.22.19
- npm: version 9.5.1
- bootstrap version ^5.3.0

## Required

1. Install Nodejs (from version 16) [click here](https://nodejs.org/en)
3. Init project with [Create React App](https://create-react-app.dev/docs/getting-started).

## Use for development

1. `yarn` or `npm install`
2. Add ENV files for 3 environments: development, staging, production with the format `.env.<env name>`, the variable names referenced in the file `.env.example`
3. Start local web: `yarn start` or `npm start`
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Preview build project
```
1. Build project: yarn build or npm run build
2. Start peview: yarn start or npm start
```

## Done

1. Config project reactjs with javascript
2. Use scss with node-sass
3. Integrate redux-toolkit
4. draw a simple chart with chart.js and react-chartjs-2
5. handle basic UI responsive with bootstrap

## Licence: MIT
