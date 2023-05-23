import { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import ShopsContainer from '../../components/ShopsContainer/ShopsContainer';
import { fetchDishes } from '../../services/api';

const shops = [
  {
    id: '1',
    name: 'MacDonaldDuck',
  },
  {
    id: '2',
    name: 'Pizza Hot',
  },
  {
    id: '3',
    name: 'VeganBar',
  },
  {
    id: '4',
    name: 'Berdichev Croissant',
  },
  {
    id: '5',
    name: 'Salaturia',
  },
];

const Shop = () => {
  const [dishes, setDishes] = useState([]);
  const [filtredDishes, setFiltredDishes] = useState([]);

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

  function handleClick(e) {
    const nameShop = e.currentTarget.textContent;

    const filtered = dishes.filter(item => item.restaurant === nameShop);
    setFiltredDishes(filtered);
  }

  return (
    <section>
      {/* <ShopsContainer /> */}
      {shops &&
        shops.map((shop, index) => (
          <button
            key={`${shop.id}_${index}`}
            value={shop.value}
            onClick={handleClick}
          >
            {shop.name}
          </button>
        ))}
      <Menu dishes={filtredDishes} />
    </section>
  );
};

export default Shop;
