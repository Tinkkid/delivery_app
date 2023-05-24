import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartList from '../../components/CartList/CartList';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import ShopsContainer from '../../components/ShopsContainer/ShopsContainer';
import ShopsMain from '../../components/ShopsMain/ShopsMain';
import { fetchDishes } from '../../services/api';
import { Container } from './Shops.styled';
// import Cart from '../CartPage/CartPage';

const Shop = () => {
  const [dishes, setDishes] = useState([]);
  const [filtredDishes, setFiltredDishes] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const getDishes = async () => {
      try {
        await fetchDishes().then(response => {
          setDishes(response);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getDishes();
  }, []);

  const handleClick = e => {
    const nameShop = e.currentTarget.textContent;
    const filtered = dishes.filter(item => item.restaurant === nameShop);
    setFiltredDishes(filtered);
  };

  const handleClickAddtoCart = item => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <>
      <Header count={cart.length} cart={cart} />
      <Container>
        {showCart ? (
          <CartList cart={cart} />
        ) : (
          <>
            <ShopsContainer handleClick={handleClick} />
            {filtredDishes.length > 0 ? (
              <Menu
                dishes={filtredDishes}
                handleClickAdd={handleClickAddtoCart}
              />
            ) : (
              <ShopsMain />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Shop;

// <>
//   <Header count={cart.length} handleClickShowCart={handleClickShowCart} />
//   <Container>
//     {showCart ? (
//       <CartList cart={cart} />
//     ) : (
//       <>
//         <ShopsContainer handleClick={handleClick} />
//         {filtredDishes.length > 0 ? (
//           <Menu
//             dishes={filtredDishes}
//             handleClickAdd={handleClickAddtoCart}
//           />
//         ) : (
//           <ShopsMain />
//         )}
//       </>
//     )}
//   </Container>
// </>;
