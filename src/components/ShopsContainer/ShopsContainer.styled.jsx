import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 10px;
`;

export const Button = styled.button`
  background-color: initial;
  background-image: linear-gradient(#4214f8 0, #0b19e0 100%);
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  vertical-align: bottom;
  width: 190px;
  padding: 20px 10px;

  &:hover {
    opacity: 0.7;
  }
`;
