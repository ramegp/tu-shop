import React from "react";
import { makeStyles } from "@material-ui/core/styles";


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

  const [click, setClick] = React.useState(false);

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

  const handleClick =()=>{
    window.location.href= `/product/${props.id + 1}`
  }

  return (
    <>
      <div className="container-card-product" onClick={handleClick}>
        <div className="card-titulo">{props.name}</div>
        <div><img src={props.img} className="img-card-product"/></div>
        <div className="card-information">
          <div className="card-categoria">Categoria</div>
          <div className="card-categoria-value">{props.category}</div>
        </div>
      </div>


    {/* <Card className="root" onClick={handleClick}>
      <CardHeader className="card-titulo" title={props.name} subheader={props.category} />
      <CardMedia
        className="card-media"
        image={props.img}
        title={props.name}
      />
      <CardContent className="card-content-product">
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
    </Card> */}
    </>
  );
}
