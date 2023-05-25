import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: #e9e622de;
  }
`;

export const styleBar = {
  appbar: {
    bgcolor: '#1377daf8',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    paddingLeft: 4,
    paddingRight: 4,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
};
