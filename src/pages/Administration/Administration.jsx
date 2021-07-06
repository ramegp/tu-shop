import React, { useEffect, useState } from 'react';
import { useUserAdministrator } from '../../provider/UserAdministrator';
import firebase from 'firebase';
import './Administration.css';

import NotAdmin from '../../components/Administration/NotAdmin/NotAdmin';
import ContenedorAdmin from '../../components/Administration/Admin/ContenedorAdmin';


function Administration() {

    const { user, ES_ADMIN, close, addUserLogeado, printUser } =
    useUserAdministrator();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((USER) => {
      if (USER) {
        addUserLogeado(USER)
        
        // ...
      } else {
        // User is signed out
        // ...
        
      }
    });
    setAdmin(ES_ADMIN)
  }, [user, ES_ADMIN,admin]);

    return (
        <div className="">
            {admin ? (<ContenedorAdmin/>):(<NotAdmin/>)}
        </div>
    )
}

export default Administration
