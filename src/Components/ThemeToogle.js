import React, { useContext } from 'react'
import { ContectCreator } from '../Context/ContextData'

const ThemeToogle = () => {
    const {handleToggle,toggleTheme} = useContext(ContectCreator)
  return (
    <button onClick={handleToggle} className='border'>
        {toggleTheme ? "switch to dark mode": "switch to light mode"}
    </button>
  )
}

export default ThemeToogle