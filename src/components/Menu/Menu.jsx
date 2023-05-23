import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map(({ id, dish }) => {
        return (
          <li key={id}>
            <MenuItem dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
