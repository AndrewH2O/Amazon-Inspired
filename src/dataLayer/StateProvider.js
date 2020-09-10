// setup data layer
// track basket
import React, {createContext, useContext, useReducer } from "react";

// prepares data layer
export const StateContext = createContext();

// provider - higher order compnent injects data into app 
// we use this in the index.js
export const StateProvider = ({reducer, initialState, children}) => (
  // useReducer hook

	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// this is how we use it inside a component
// pull info from data layer
export const useStateValue = () => useContext(StateContext);


