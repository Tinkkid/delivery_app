import React from 'react';
import Cart from '../Cart/Cart';
import { OrderList, CartWrap } from './CartList.styled';

const CartList = ({ cart }) => {
  return (
    <CartWrap>
      {cart.map((cartItem, index) => {
        return (
          <OrderList key={`${index}_${cartItem.id}`}>
            <Cart orders={cartItem} />
          </OrderList>
        );
      })}
    </CartWrap>
  );
};

export default CartList;
