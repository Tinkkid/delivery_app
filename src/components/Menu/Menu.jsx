import MenuItem from '../MenuItem/MenuItem';
import { MenuWrap, MenuList } from './Menu.styled';

const Menu = ({ products }) => {
  return (
    <MenuWrap>
      {products.map((item, index) => {
        return (
          <MenuList key={`${index}_${item.id}`}>
            <MenuItem product={item} />
          </MenuList>
        );
      })}
    </MenuWrap>
  );
};

export default Menu;
