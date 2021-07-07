import firebase from 'firebase/app'

import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tu-shop-ramegp.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: "tu-shop-ramegp.appspot.com",
    messagingSenderId: "43386991179",
    appId: process.env.REACT_APP_APPID
});

export function getFireBase(params) {
    return app
}

export function getFirestore(params) {
    return firebase.firestore(app)
}