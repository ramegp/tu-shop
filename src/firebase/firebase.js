import firebase from 'firebase/app'

import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCyWE1DOQuTHQk7jh3oNZ-p-GndIQv9QHQ",
    authDomain: "tu-shop-ramegp.firebaseapp.com",
    projectId: "tu-shop-ramegp",
    storageBucket: "tu-shop-ramegp.appspot.com",
    messagingSenderId: "43386991179",
    appId: "1:43386991179:web:b9ad4a5c26a2a1c56fd3ce"
});

export function getFireBase(params) {
    return app
}

export function getFirestore(params) {
    return firebase.firestore(app)
}