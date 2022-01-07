
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyACzTKxTj4vqJmAmFBOlWPm5Huk908YFjs",

    authDomain: "proyecto-react-coderhous-22c3c.firebaseapp.com",

    projectId: "proyecto-react-coderhous-22c3c",

    storageBucket: "proyecto-react-coderhous-22c3c.appspot.com",

    messagingSenderId: "429353057728",

    appId: "1:429353057728:web:5dd604aaff8d2573349c25"

};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}