import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GoBackLink } from "../GoBackLink/GoBackLink";
import { styleBar, StyledLink } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const CartPage = location.pathname === "/cart";

  return (
    <AppBar position="static" sx={styleBar.appbar}>
      <Toolbar sx={styleBar.toolbar}>
        {!CartPage ? (
          <StyledLink to="/">
            <Typography variant="h5" component="span">
              Shops
            </Typography>
          </StyledLink>
        ) : (
          <GoBackLink to={backLinkHref}>
            <ArrowBackIcon />
            <Typography variant="h5" component="span">
              Back to shops
            </Typography>
          </GoBackLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
