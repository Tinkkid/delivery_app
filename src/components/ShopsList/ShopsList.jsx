import { shops } from '../../db/db_shops';
import { Container, Button } from './ShopsList.styled';

const ShopsList = ({ handleClick }) => {
  return (
    <Container>
      {shops.map((shop, index) => (
        <Button
          key={`${shop.id}_${index}`}
          value={shop.value}
          onClick={handleClick}
        >
          {shop.name}
        </Button>
      ))}
    </Container>
  );
};

export default ShopsList;
