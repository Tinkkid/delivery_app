import { Container, Text, Image } from './ShopsMain.styled';
import order from '../../assets/img/order.png';

const ShopsMain = () => {
  return (
    <Container>
      <Text>Choise tasty dish</Text>
      <Image src={order} alt="main dish" />
    </Container>
  );
};

export default ShopsMain;
