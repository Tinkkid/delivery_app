import { AppBar, Toolbar, Typography } from '@mui/material';
import { styleBar, StyledLink } from './Header.styled';

const Header = () => {
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
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
