import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { FiUser, FiPhone } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
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
  IconUser,
} from './ClientForm.styled';
import { addOrder } from '../../redux/ordersOperation';

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

const ClientForm = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart);
  console.log(data);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    adress: '',
    data: { ...data },
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addOrder({
        name: values.name,
        email: values.email,
        phone: values.password,
        adress: values.adress,
        data: { ...data },
      })
    )
      .unwrap()
      .then(() => Notiflix.Notify.success('Order sent successfully!'))
      .catch(() => Notiflix.Notify.warning('Something wrong'));
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <CartWrap>
          <FormWrap>
            <LabelInput>
              <TitleLable>Name</TitleLable>
              <InputContainer>
                <IconUser>
                  <FiUser />
                </IconUser>
                <Input type="text" name="name" />
              </InputContainer>
              <Error name="name" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Email</TitleLable>
              <InputContainer>
                <IconUser>
                  <HiOutlineMail />
                </IconUser>
                <Input type="email" name="email" />
              </InputContainer>
              <Error name="email" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Phone</TitleLable>
              <InputContainer>
                <IconUser>
                  <FiPhone />
                </IconUser>
                <Input type="phone" name="phone" />
              </InputContainer>
              <Error name="phone" component="div" />
            </LabelInput>
            <LabelInput>
              <TitleLable>Adress</TitleLable>
              <InputContainer>
                <IconUser>
                  <HiOutlineLocationMarker />
                </IconUser>
                <Input type="adress" name="adress" />
              </InputContainer>
              <Error name="adress" component="div" />
            </LabelInput>
          </FormWrap>
          <OrdersWrap>
            <h2>My cart</h2>
            <CartList />
          </OrdersWrap>
        </CartWrap>
        <BtnSubmit type="submit">Submit</BtnSubmit>
      </Form>
    </Formik>
  );
};

export default ClientForm;
