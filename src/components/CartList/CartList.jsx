import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  changeQuantity,
  getCartTotal,
  clearCart,
} from '../../redux/cartSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { OrderList, CartWrap } from './CartList.styled';

const CartList = () => {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
    deliveryCharge,
  } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line
  }, [useSelector(state => state.cart)]);

  return (
    <CartWrap>
      {cartProducts.map((product, index) => {
        return (
          <OrderList key={`${index}_${product.id}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={product.dish}
                height="140"
                width="200"
                image={product.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.dish}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">-</Button>
                <Typography variant="body2" color="text.secondary">
                  {product.quantity}
                </Typography>
                <Button size="small">+</Button>
                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </OrderList>
        );
      })}
    </CartWrap>
  );
};

export default CartList;
