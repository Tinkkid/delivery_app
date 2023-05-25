import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  changeQuantity,
  getCartTotal,
} from '../../redux/cartSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { OrderList, CartWrap } from './CartList.styled';

const CartList = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line
  }, [useSelector(state => state.cart)]);

  // const formatPrice = price => {
  //   return new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'UAH',
  //   }).format(price);
  // };

  const calculatePrice = cartProducts
    .map(item => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

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
                <Typography gutterBottom variant="button" component="div">
                  {product.dish}
                </Typography>
                <Typography variant="caption">{product.price} UAH</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    dispatch(changeQuantity({ id: product.id, type: 'DEC' }))
                  }
                >
                  <RemoveCircleIcon />
                </Button>
                <Typography variant="button">{product.quantity}</Typography>
                <Button
                  size="small"
                  onClick={() =>
                    dispatch(changeQuantity({ id: product.id, type: 'INC' }))
                  }
                >
                  <AddCircleIcon />
                </Button>
                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <DeleteForeverIcon />
                </Button>
              </CardActions>
            </Card>
          </OrderList>
        );
      })}
      <div>{calculatePrice} UAH</div>
    </CartWrap>
  );
};

export default CartList;
