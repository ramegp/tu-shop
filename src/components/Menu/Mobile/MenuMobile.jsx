import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";

import './MenuMobile.css'
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

  return (
    <div className={classes.root} className="d-md-none fixed-bottom w-100">
      <AppBar position="static">
        <Toolbar variant="dense">
        <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/"><HomeIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/shop"><StorefrontOutlinedIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="delete">
              <Link to="/about"><PermIdentityRoundedIcon className="menu-mobile-icons"/></Link>
            </IconButton>
          </Grid>
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
