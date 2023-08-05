import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const initialState = { count: 0 };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
