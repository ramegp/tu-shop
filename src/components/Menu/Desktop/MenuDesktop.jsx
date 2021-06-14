import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import './MenuDesktop.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import Checkout from '../../Checkout/CheckoutDesktop/CheckoutDesktop';
import { useStateValue } from '../../../StateProvider';


const handleCart =()=>{
  return (alert())
}

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
  const [{basket}, dispatch] = useStateValue();

  return (
    
      <AppBar position="fixed" className="d-none d-md-block d-lg-block d-xl-block">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <ul className="menu-desktop-container-links">
              <li>
                <Link to="/home" className="menu-desktop-links">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="menu-desktop-links">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="menu-desktop-links">About</Link>
              </li>
            </ul>
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton aria-label="delete" onClick={handleCart}>
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCartIcon className="menu-desktop-icon-cart" />
            </Badge>      
          </IconButton>
          
          
        </Toolbar>
      </AppBar>
  );
}
