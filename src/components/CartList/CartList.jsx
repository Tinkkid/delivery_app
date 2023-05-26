import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../../redux/cart/cartSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { OrderList, CartWrap, styleBtn } from './CartList.styled';
import { selectCart } from '../../redux/selectors';

const CartList = () => {
  const dispatch = useDispatch();
  const { data: cartProducts } = useSelector(selectCart);

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
                <Typography variant="h5">{product.quantity}</Typography>
                <Button
                  size="small"
                  sx={styleBtn.btn}
                  onClick={() =>
                    dispatch(changeQuantity({ id: product.id, type: 'INC' }))
                  }
                >
                  <AddCircleIcon />
                </Button>
                <Button
                  size="small"
                  sx={styleBtn.removeBtn}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <DeleteForeverIcon />
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
