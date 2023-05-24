import styled from '@emotion/styled';

export const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`;

export const MenuList = styled.li`
  width: 220px;
`;
