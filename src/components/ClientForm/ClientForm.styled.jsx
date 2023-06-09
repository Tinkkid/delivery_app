import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)`
  color: #1f2029;
  text-align: center;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const OrdersWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;

export const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

export const Input = styled(Field)`
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  padding: 13px 20px;
  padding-left: 55px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #1f2029;
  border: 1px solid #1f2029;
  transition: all 200ms linear;
`;

export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #1f2029;
`;
export const BtnSubmit = styled.button`
  border-radius: 4px;
  height: 44px;
  margin-left: 40px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: #ffeba7;
  color: #1377daf8;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);

  &:focus,
  &:hover {
    background-color: #1377daf8;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
`;

export const IconUser = styled.i`
  position: relative;
  top: 0;
  left: 10%;
  font-size: 18px;
  color: #0f62b5f8;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const TitleLable = styled.span`
  margin-left: 20px;
  text-align: start;
  font-size: 24px;
`;

export const TotalPrice = styled.div`
  text-align: start;
  font-size: 28px;
  font-weight: 700;
`;

export const NoOrder = styled.p`
  margin-top: 20%;
  font-size: 28px;
  font-weight: 700;
`;
