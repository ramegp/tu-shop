import React, { createContext, useContext, useState } from 'react';
import firebase from 'firebase';



const UserAdministratorContext = createContext();

export function useUserAdministrator() {
    return useContext(UserAdministratorContext)
}


export function UserAdministrator({ children }) {
    /* admin@admin.com YAnjgq2IvxYuFrOGNyqgufOJAUx1 */
    /* tutor MLpP3pvVjCSMywomw9hlmGGaP9F2 */
    /* mio  I6mnfOEZxWMxFxgmbTkhhX0suQs1 */
    /* profesora  */
    const UID_ADMIN = "YAnjgq2IvxYuFrOGNyqgufOJAUx1";

    const [user, setUser] = useState(null);

    const [ES_ADMIN, setES_ADMIN] = useState(false);

    function addUserLogeado(obj) {
        setUser(obj);
        administrador();
    }

    function printUser() {
        console.log(user.email)
        console.log(ES_ADMIN)
    }
    

    function administrador() {
        
        if (user) {
            
            if (user.uid === UID_ADMIN) {
                setES_ADMIN(true);
            } else {
                setES_ADMIN(false)
            }
        } else {
            setES_ADMIN(false)
        }
    }


    function handleAuth(e) {
        e.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                //console.log(`${result} ha iniciado sesion`);
                //let Aux_user = firebase.auth().currentUser;
                setUser(result.user);
                administrador();
            })
            .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    function handleAuthWithoutGoogle(email, password) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                //console.log(userCredential);
                console.log("Usuario creado");
                let Aux_user = firebase.auth().currentUser;
                setUser(Aux_user);
                administrador()
                // ...
            })
            .catch((error) => {
                console.log(`Error ${error.code}: ${error.message}`)
                
                // ..
            });
    }


    function handleSingUpWithoutGoogle(email, password) {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                // Signed in
                console.log(`${result} ....... Ha iniciado sesion`);
                let Aux_user = firebase.auth().currentUser;
                setUser(Aux_user);
                administrador()
                
            })
            .catch((error) => {
                console.log(`Error ${error.code}: ${error.message}`)
                
            });
        
    }


    function close() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUser('')
            setES_ADMIN(false)

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <UserAdministratorContext.Provider value={{ user, ES_ADMIN, handleAuth, handleSingUpWithoutGoogle, handleAuthWithoutGoogle, close, addUserLogeado, printUser }}>
            {children}
        </UserAdministratorContext.Provider>
    )
}