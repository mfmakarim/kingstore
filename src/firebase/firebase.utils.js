import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCiOvzMJHOVY1UvSqADw5tgInW-OzFyXEc",
    authDomain: "kingstore-db.firebaseapp.com",
    databaseURL: "https://kingstore-db.firebaseio.com",
    projectId: "kingstore-db",
    storageBucket: "kingstore-db.appspot.com",
    messagingSenderId: "413247757741",
    appId: "1:413247757741:web:720dfe1661a293de091524",
    measurementId: "G-76Z3WLFC6J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
