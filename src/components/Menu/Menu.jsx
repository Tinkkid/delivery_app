import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map(({ id, dish }, index) => {
        return (
          <li key={`${index}_${id}`}>
            <MenuItem dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
