import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 90px auto;
  width: fit-content;
  padding: 20px 40px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  border: 5px solid #ae7be3;
  font-family: 'Montserrat';
  text-transform: uppercase;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #461ca9e0;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Info = styled.h2`
  color: #461ca9e0;
  margin: 20px 0;
`;

export const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LinkInfo = styled.h3`
  color: #4313b4ad;
  font-size: 32px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  color: #4313b4ad;
  text-decoration: none;
`;

export const StyledIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 8px;
  background-color: #ebd8ff;
  transition: all 250ms linear 0s;
  animation: pulse 2s infinite;
  &:hover,
  &:focus {
    background: #5cd3a8;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(76, 44, 204, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      }
    }
  }
`;
