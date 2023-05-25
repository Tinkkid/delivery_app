import { Container, Button } from './ShopsList.styled';

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
    name: 'Salaturia',
  },
  {
    id: '5',
    name: 'Berdichev Croissant',
  },
];

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
