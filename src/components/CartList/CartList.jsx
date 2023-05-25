import React from 'react';

import CartItem from '../CartItem/CartItem';
import { OrderList, CartWrap } from './CartList.styled';

const CartList = ({ cart }) => {
  return (
    <CartWrap>
      {cart.map((product, index) => {
        return (
          <OrderList key={`${index}_${product.id}`}>
            <CartItem orders={product} />
          </OrderList>
        );
      })}
    </CartWrap>
  );
};

export default CartList;
