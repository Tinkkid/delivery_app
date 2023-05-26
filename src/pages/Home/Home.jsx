import { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import ShopsList from '../../components/ShopsList/ShopsList';
import ShopsMain from '../../components/ShopsMain/ShopsMain';
import { Container } from './Home.styled';
import { Loader } from '../../components/Loader/Loader';
import { useFetchMenuQuery } from '../../redux/menu/menuSlice';

const Home = () => {
  const [filtredProduct, setFiltredProduct] = useState([]);
  const { data, isFetching, isLoading } = useFetchMenuQuery();

  const handleClick = e => {
    const nameShop = e.currentTarget.textContent;
    const filtered = data.filter(item => item.restaurant === nameShop);
    setFiltredProduct(filtered);
  };

  return (
    <>
      <Container>
        <ShopsList handleClick={handleClick} />
        {(isFetching || isLoading) && <Loader />}
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
