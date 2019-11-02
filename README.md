# iTunes Movie Finder

## Description
Search for movies available from iTunes. The search is limited to movies in the US iTunes store. Results include the movie name, movie artwork, rental price, short description, and long description.

## Prerequisites
* React 16.11 
* Node 10.15.3
* npm 6.4.1
* Material-UI
* Axios

## Installing
Run `npm install` to install the node modules.

## Usage
Run `npm start` to run a local instance of the application. Navigate to [http://localhost:3000](http://localhost:3000) in your favorite browser to see the web application.


## Extension Questions
* The text value entered in the `Movies` component, after pressing "Enter", is passed to the `MovieSearch` component and is used to create a `GET` request using Axios with the full URL (search term and base iTunes search URL). After the promise resolves and results are returned, these are passed to the `MovieGrid` component which iterates through each result and creates a "Card" display for each movie result. These are arranged in a grid using the Material-UI `Grid` component. Since the actual code is here in this repo, I'm not sure what pseudocode is needed.
* Improvements 
  * Add ability to vote for movies
  * Add user login to store individual interests such as my favorite movies and movies I want to see. 
  * Add movie preview 
  * Add better testing
* Time investment 
  * I had a basic search and table output in 1 hour, but then decided to re-format the display using Cards and added a Modal to display the long description which took another 2.5 hr as I have not used these Material-UI components before and needed to sort out some style decisions for the Card format and text display. I decided to truncate the movie title in the Card to maintain the uniformity of the Cards and have seen this done in other displays such as the Google Play store. I also truncated the short description since I then added the Modal with the full description.





## Create React App Boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

