## About
 This app can be used to register and log in, and once signed in, users can detect faces in images by utilizing Clarifai's API.Users can monitor their usage by uploading images and viewing the number of detected faces, as well as their overall image upload count. The application employs Node.js and PostgreSQL on the backend, and is built with React on the frontend. It incorporates user authentication, form validation, and database management through Knex.js.
 
*Finally the app is working. The backend server is deployed on Heroku and the frontend code on Github-pages*


## App explanation

- The Navigation, Logo, Signin, ImageLinkForm, Rank, Register and FaceRecognitation components are imported and used.

- The "initialState" constant is defined to set the initial state of the app.

- The "App" class is defined and inherits from the "Component" class of React.

- A constructor is defined to set the initial state of the app to the "initialState".

- Methods like "updateUser", "calculateFaceLocation", "displayFaceBox", "onInputChange", "onButtonSubmit" and "onRouteChange" are defined to update or change the state of the app.

- The "render" method is defined to create and return the React elements that are displayed on the web page.

- The "signin" or the "register" component is added to the "app" component, depending on which "route" state of the app is set.
