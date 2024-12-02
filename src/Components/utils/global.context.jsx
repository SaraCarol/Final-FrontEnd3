/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";


export const initialState = {
  theme: "light", 
  data: []
}


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect( () =>{
    axios(url)
  .then(res => {
    console.log(res.data)
    dispatch({type: 'DATA_ACTION', payload: res.data} )
  })
  document.body.className = state.theme
  }, [state.theme])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
