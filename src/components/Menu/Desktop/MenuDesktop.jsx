import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider";

import { UseCart } from "../../../provider/CarritoContexto";

//------------------------------------
import "./MenuDesktop.css";
//--------

import { useUserAdministrator } from "../../../provider/UserAdministrator";
import { useEffect } from "react";
import firebase from "firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const { cart } = UseCart();

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
    <AppBar
      position="fixed"
      className="d-none d-md-block d-lg-block d-xl-block bg-menu-desktop"
    >
      <Toolbar>
        <div style={{ fontFamily: "tiza", fontSize: "12px" }}>
          El Rincon De la Hamburgesa
        </div>
        
        <Typography variant="h6" className={classes.title}>
          <ul className="menu-desktop-container-links">
            <li>
              <Link to="/" className="menu-desktop-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/choose-restaurant" className="menu-desktop-links">
                Shop
              </Link>
            </li>

            <li>
              {admin ? (
                <Link to="/admin" className="menu-desktop-links">
                  Admin
                </Link>
              ) : (
                <Link to="/about" className="menu-desktop-links">
                  About
                </Link>
              )}
            </li>
          </ul>
        </Typography>
        
        {user ? (
          <>
          <Button onClick={printUser} color="inherit">
          {user.email.split("@")[0]}
        </Button>
          <Button onClick={close} color="inherit">
            cerrar
          </Button>
          </>
        ) : (
          <Button color="inherit">
            <Link to="/signin">Login</Link>
          </Button>
        )}
        <Link to="/checkout-page">
          <IconButton
            aria-label="delete" /* onClick={handleClickOpen('paper')} */
          >
            <Badge badgeContent={cart?.length} color="secondary">
              <ShoppingCartIcon className="menu-desktop-icon-cart" />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
