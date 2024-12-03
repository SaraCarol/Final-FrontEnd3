/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  theme: "light", 
  data: [],
  favs: initialFavs
}


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'
  

  useEffect( () =>{
    axios(url)
  .then(res => {
    dispatch({type: 'DATA_ACTION', payload: res.data} )
  })
  document.body.className = state.theme
  }, [state.theme])

  useEffect(() =>{
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
