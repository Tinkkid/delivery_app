import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
} from '../../redux/cartSlice';

const Cart = ({ orders }) => {
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = product => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { dish, img, price, cartQuantity } = orders;
  console.log(orders);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={dish}
        height="140"
        width="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleDecreaseCart(orders)}>
          -
        </Button>
        <Typography variant="body2" color="text.secondary">
          {cartQuantity}
        </Typography>
        <Button size="small" onClick={() => handleAddToCart(orders)}>
          +
        </Button>
        <Button size="small" onClick={() => handleRemoveFromCart(orders)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cart;
