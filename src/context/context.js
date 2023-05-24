import { createContext, useReducer } from 'react';

export const contextData = createContext();

export const Context = props => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const dataAdded = state.filter(item => action.payload.id === item.id);
        if (dataAdded.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case 'INCREASE':
        const dataIncreased = state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return dataIncreased;

      case 'DECREASE':
        const dataDecreased = state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return dataDecreased;

      case 'REMOVE':
        const dataRemoved = state.filter(item => item.id !== action.payload.id);
        return dataRemoved;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const data = { state, dispatch };
  return (
    <contextData.Provider value={data}>{props.children}</contextData.Provider>
  );
};
