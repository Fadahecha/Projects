import React from 'react'
import './toggle.css'
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {

    const theme = useContext(ThemeContext)
    
    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})

    }

  return (
    <div className='toggle'>
        <img src={sun} alt="" className="toggle-icon" />
        <img src={moon} alt="" className="toggle-icon" />
        <div className="toggle-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle