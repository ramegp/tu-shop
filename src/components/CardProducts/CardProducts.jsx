import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";

import "./CardProducts.css";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  
}));

export default function RecipeReviewCard(props) {

  const [{basket}, dispatch] = useStateValue();
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket=()=>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{
        id:props.id,
        name:props.name,
        image:props.img,
        price: props.price,
        description: props.description
      }
    })
  }

  return (
    <Card className="root">
      <CardHeader className="card-titulo" title={props.name} subheader={props.category} />
      <CardMedia
        className="card-media"
        image={props.img}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid item xs={8}>
          <Typography variant="h5" className="card-item-price">
            ${props.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <IconButton aria-label="add to cart" onClick={addToBasket}>
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
