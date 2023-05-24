import { Formik, Form } from 'formik';
import * as yup from 'yup';
import CartList from '../CartList/CartList';
import {
  BtnSubmit,
  Error,
  FormWrap,
  Input,
  InputContainer,
  LabelInput,
  TitleLable,
  CartWrap,
  OrdersWrap,
} from './ClientForm.styled';

const RegisterSchema = yup.object().shape({
  name: yup
    .string(' Name may contain only letters, apostrophe, dash and spaces.')
    .required('Name is required field.'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  phone: yup
    .string('Enter your password')
    .min(7, 'Phone should be of minimum 7 characters length')
    .required('Phone is required field, min 7 characters'),
  adress: yup.string('Enter your adress').required('Adress is required field.'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  adress: '',
};

const ClientForm = ({ cart }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form autoComplete="off">
        <CartWrap>
          <FormWrap>
            <LabelInput>
              <TitleLable>Name</TitleLable>
              <InputContainer>
                <Input type="text" name="name" />
              </InputContainer>
              <Error name="name" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Email</TitleLable>
              <InputContainer>
                <Input type="email" name="email" />
              </InputContainer>
              <Error name="email" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Phone</TitleLable>
              <InputContainer>
                <Input type="phone" name="phone" />
              </InputContainer>
              <Error name="phone" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Adress</TitleLable>
              <InputContainer>
                <Input type="adress" name="adress" />
              </InputContainer>
              <Error name="adress" component="div" />
            </LabelInput>
          </FormWrap>
          <OrdersWrap>
            <p>nnnn</p>
          </OrdersWrap>
        </CartWrap>
        <BtnSubmit type="submit">Submit</BtnSubmit>
      </Form>
    </Formik>
  );
};

export default ClientForm;
