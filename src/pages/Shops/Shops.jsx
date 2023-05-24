import { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import ShopsContainer from '../../components/ShopsContainer/ShopsContainer';
import ShopsMain from '../../components/ShopsMain/ShopsMain';
import { Container } from './Shops.styled';
import { useFetchMenuQuery } from '../../redux/dishesSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Shop = () => {
  const [filtredDishes, setFiltredDishes] = useState([]);

  const { data } = useFetchMenuQuery();
  const dispatch = useDispatch();

  const handleClick = e => {
    const nameShop = e.currentTarget.textContent;
    const filtered = data.filter(item => item.restaurant === nameShop);
    setFiltredDishes(filtered);
  };

  const handleClickAddtoCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {/* <Header count={cart.length} cart={cart} /> */}
      <Container>
        <ShopsContainer handleClick={handleClick} />
        {filtredDishes.length > 0 ? (
          <Menu dishes={filtredDishes} handleClickAdd={handleClickAddtoCart} />
        ) : (
          <ShopsMain />
        )}
      </Container>
    </>
  );
};

export default Shop;

// useEffect(() => {
//   const getDishes = async () => {
//     try {
//       await fetchDishes().then(response => {
//         setDishes(response);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getDishes();
// }, []);

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
