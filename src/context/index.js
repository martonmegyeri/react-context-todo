import React, { createContext, useReducer } from 'react';
import rootReducer, { initialState } from './rootReducer';

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(rootReducer, initialState)}>
    {children}
  </StateContext.Provider>
);
