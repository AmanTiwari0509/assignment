import React, { createContext, useContext, useState } from 'react'


export const ContectCreator = createContext()

export const ContextData = ({children}) => {
    const [toggleTheme, setToggleTheme] = useState(false)
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const handleToggle = () => {
        setToggleTheme(!toggleTheme)
    }
    const dataFetching = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((err) => setError(err));
      };
    
      console.log(data);
  return (
    <ContectCreator.Provider value={{handleToggle,toggleTheme,data,dataFetching}} >
        {children}
    </ContectCreator.Provider>
  )
}
