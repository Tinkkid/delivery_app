import { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import ShopsContainer from '../../components/ShopsContainer/ShopsContainer';
import ShopsMain from '../../components/ShopsMain/ShopsMain';
import { fetchDishes } from '../../services/api';
import { Container } from './Shops.styled';

const Shop = () => {
  const [dishes, setDishes] = useState([]);
  const [filtredDishes, setFiltredDishes] = useState([]);

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

  function handleClick(e) {
    const nameShop = e.currentTarget.textContent;
    const filtered = dishes.filter(item => item.restaurant === nameShop);
    setFiltredDishes(filtered);
  }

  return (
    <Container>
      <ShopsContainer handleClick={handleClick} />
      {filtredDishes.length > 0 ? (
        <Menu dishes={filtredDishes} />
      ) : (
        <ShopsMain />
      )}
    </Container>
  );
};

export default Shop;
