import { Container, Text, Image } from './ShopsMain.styled';
import order from '../../assets/img/order.png';

const ShopsMain = () => {
  return (
    <Container>
      <Image src={order} alt="main dish" />
      <Text>
        Choose what you like and enjoy! To place an order, choose one of the
        restaurants and add the dish to the cart.
      </Text>
    </Container>
  );
};

export default ShopsMain;
