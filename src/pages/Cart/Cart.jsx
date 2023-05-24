import ClientForm from '../../components/ClientForm/ClientForm';
import { FormContainer, Container } from './Cart.styled';

const Cart = () => {
  return (
    <Container>
      <FormContainer>
        <ClientForm />
      </FormContainer>
    </Container>
  );
};

export default Cart;
