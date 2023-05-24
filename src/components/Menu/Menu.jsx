import MenuItem from '../MenuItem/MenuItem';
import { MenuWrap, MenuList } from './Menu.styled';

const Menu = ({ dishes, handleClickAdd }) => {
  return (
    <MenuWrap>
      {dishes.map((item, index) => {
        return (
          <MenuList key={`${index}_${item.id}`}>
            <MenuItem item={item} handleClickAdd={handleClickAdd} />
          </MenuList>
        );
      })}
    </MenuWrap>
  );
};

export default Menu;
