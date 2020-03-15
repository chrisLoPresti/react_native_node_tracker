import React, { useReducer, createContext } from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = Object.keys(actions).reduce((acc, key) => {
      return { ...acc, [key]: actions[key](dispatch) };
    }, {});
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
