import { useSelector } from 'react-redux';
import { selectMeals } from '../../redux/meals/selector';
import MealsItem from '../MenuItem/MealsItem';

const MealsList = () => {
  const meals = useSelector(selectMeals);

  return (
    <ul>
      {meals.map(dish => {
        return (
          <li key={dish.id}>
            <MealsItem dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsList;
