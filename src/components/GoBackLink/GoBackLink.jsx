import { StyledLink } from './GoBackLink.styled';

export const GoBackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
