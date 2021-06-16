import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import Checkout from '../../Checkout/CheckoutDesktop/CheckoutDesktop';
import { useStateValue } from '../../../StateProvider';


//------------------------------------
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './MenuDesktop.css';
//--------

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
  //---
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  //-----

  return (
    
      <AppBar position="fixed" className="d-none d-md-block d-lg-block d-xl-block">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <ul className="menu-desktop-container-links">
              <li>
                <Link to="/" className="menu-desktop-links">Home</Link>
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
          <Link to="/checkout-page">
          <IconButton aria-label="delete" onClick={handleClickOpen('paper')}>
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCartIcon className="menu-desktop-icon-cart" />
            </Badge>      
          </IconButton>
          </Link>
          
          
        </Toolbar>
      </AppBar>
  );
}
