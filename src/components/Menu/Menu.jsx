import MenuItem from '../MenuItem/MenuItem';
import { MenuWrap, MenuList } from './Menu.styled';

const Menu = ({ dishes }) => {
  return (
    <MenuWrap>
      {dishes.map(({ id, dish, price, img }, index) => {
        return (
          <MenuList key={`${index}_${id}`}>
            <MenuItem dish={dish} price={price} image={img} />
          </MenuList>
        );
      })}
    </MenuWrap>
  );
};

export default Menu;
