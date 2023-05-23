const shops = [
  {
    id: '1',
    name: 'MacDonaldDuck',
  },
  {
    id: '2',
    name: 'Pizza Hot',
  },
  {
    id: '3',
    name: 'VeganBar',
  },
  {
    id: '4',
    name: 'Salaturia',
  },
  {
    id: '5',
    name: 'Salaturia',
  },
];

const ShopsContainer = () => {
  return (
    <div>
      {shops.map(shop => {
        return <button key={shop.id}>{shop.name}</button>;
      })}
    </div>
  );
};

export default ShopsContainer;
