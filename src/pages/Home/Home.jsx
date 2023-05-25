import { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import ShopsList from '../../components/ShopsList/ShopsList';
import ShopsMain from '../../components/ShopsMain/ShopsMain';
import { Container } from './Home.styled';
import { useFetchMenuQuery } from '../../redux/menuSlice';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/cartSlice';

const Home = () => {
  const [filtredProduct, setFiltredProduct] = useState([]);

  const { data } = useFetchMenuQuery();
  // const dispatch = useDispatch();

  const handleClick = e => {
    const nameShop = e.currentTarget.textContent;
    const filtered = data.filter(item => item.restaurant === nameShop);
    setFiltredProduct(filtered);
  };

  // const handleClickAddtoCart = item => {
  //   dispatch(addToCart(item));
  // };

  return (
    <>
      <Container>
        <ShopsList handleClick={handleClick} />
        {filtredProduct.length > 0 ? (
          <Menu products={filtredProduct} />
        ) : (
          <ShopsMain />
        )}
      </Container>
    </>
  );
};

export default Home;

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
