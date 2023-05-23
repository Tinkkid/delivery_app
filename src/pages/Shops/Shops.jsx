import { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import { fetchDishes } from '../../services/api';

const Shop = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      try {
        await fetchDishes().then(response => {
          setDishes(prevstate => [...prevstate, ...response]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getDishes();
  }, []);

  return (
    <section>
      <Menu dishes={dishes} />
    </section>
  );
};

export default Shop;
