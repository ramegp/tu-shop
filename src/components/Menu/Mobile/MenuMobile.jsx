import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import HomeIcon from '@material-ui/icons/Home';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";

import './MenuMobile.css'
import { useUserAdministrator } from "../../../provider/UserAdministrator";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const {
    ES_ADMIN,
  } = useUserAdministrator();


  return (
    <div className={classes.root} className="d-md-none fixed-bottom w-100 ">
      <AppBar position="static" className="bg-menu-mobile">
        <Toolbar variant="dense">
        <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/"><HomeIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/choose-restaurant"><StorefrontOutlinedIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/signin"><PermIdentityRoundedIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
          {ES_ADMIN && <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/admin"><PermIdentityRoundedIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>}
          
          <Grid item xs={3}>
            <IconButton aria-label="delete">
            <Link to="/checkout-page"><ShoppingCartOutlinedIcon className="menu-mobile-icons" /></Link>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
