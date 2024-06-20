# Firebase Authentication with React

This project demonstrates how to implement user authentication using Firebase Authentication in a React application. It includes features such as user registration, login, and logout.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Firebase Setup](#firebase-setup)
- [Available Scripts](#available-scripts)
- [Contact](#contact)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- Firebase account (https://firebase.google.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ramishbinsiddique15/User-Authentication.git
    ```
2. Navigate to the project directory:

3. Install the dependencies:
    ```sh
    npm install
    ```

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to the **Authentication** section and enable Email/Password authentication.
3. Navigate to the **Project settings** and in the **General** tab, find your Firebase SDK configuration.
4. Create a `.env` file in the root directory of the project and add your Firebase configuration:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```
5. Initialize Firebase in your project by creating a `firebase.js` file in the `src` directory and adding the following code:
    ```javascript
    import firebase from "firebase/app";
    import "firebase/auth";

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    };

    firebase.initializeApp(firebaseConfig);

    export const auth = firebase.auth();
    ```
## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

## Contact
For any inquiries or feedback, you can reach out to me at [ramishbinsiddique24@gmail.com]
