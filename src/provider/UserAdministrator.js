import React, { createContext, useContext, useState } from 'react';
import firebase from 'firebase';



const UserAdministratorContext = createContext();

export function useUserAdministrator() {
    return useContext(UserAdministratorContext)
}


export function UserAdministrator({ children }) {
    const UID_ADMIN = "YAnjgq2IvxYuFrOGNyqgufOJAUx1";

    const [user, setUser] = useState();
    const [ES_ADMIN, setES_ADMIN] = useState(false);

    function probandoEstado() {
        if (user) {
            setES_ADMIN(isAdmin())
        } else {
            setES_ADMIN(false);
        }
        
    }

    

    function handleAuth(e) {
        e.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(`${result.user.email} ha iniciado sesion`);
                let Aux_user = firebase.auth().currentUser;
                setUser(Aux_user);
                console.log(user);
                probandoEstado()
            })
            .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    function handleAuthWithoutGoogle(email, password) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                let Aux_user = firebase.auth().currentUser;
                setUser(Aux_user);
                console.log(user)
                var user = userCredential.user;
                probandoEstado()
                // ...
            })
            .catch((error) => {
                console.log(error)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }


    function handleSingUpWithoutGoogle(email, password) {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log(`${userCredential.user} Ha iniciado sesion`);
                let Aux_user = firebase.auth().currentUser;
                setUser(userCredential);
                console.log(`usuario ingreso ${user}`)
                probandoEstado()
                /* var user = userCredential.user; */
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    function isAdmin() {
        firebase.auth().onAuthStateChanged((USER) => {
            if (USER) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                let uid = USER.uid;
                console.log(`Es Admin? ${(uid === UID_ADMIN)}`)
                return (uid === UID_ADMIN)
                // ...
            } else {
                // User is signed out
                // ...
                return false
            }
        });
    }

    function close() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUser()
            probandoEstado();
            
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <UserAdministratorContext.Provider value={{ user, ES_ADMIN, handleAuth, handleSingUpWithoutGoogle, handleAuthWithoutGoogle, isAdmin ,close }}>
            {children}
        </UserAdministratorContext.Provider>
    )
}