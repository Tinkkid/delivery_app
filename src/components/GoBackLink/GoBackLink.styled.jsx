import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;
