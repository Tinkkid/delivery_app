import { AppBar, Toolbar, Typography } from '@mui/material';
import { styleBar, StyledLink } from './Header.styled';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Header = props => {
  return (
    <AppBar position="static" sx={styleBar.appbar}>
      <Toolbar sx={styleBar.toolbar}>
        <StyledLink to="/">
          <Typography variant="h5" component="span">
            Shops
          </Typography>
        </StyledLink>
        <StyledLink to="/cart">
          <Typography variant="h5" component="span">
            Cart
            <ShoppingCartCheckoutIcon style={{ marginLeft: 10 }} />
            <sup>{props.count}</sup>
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
