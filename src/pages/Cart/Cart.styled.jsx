import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  margin: 50px auto;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
  }
`;
