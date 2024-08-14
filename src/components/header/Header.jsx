import React from 'react'
import Navbar from '../navbar/Navbar'
import HeaderS, { LogoS, LogoS2 } from './style'

const Header = () => {
  return (
    <HeaderS>
        <LogoS href="##">
            <i>{'<Clarusway/>'}</i>
            <LogoS2>Recipe</LogoS2>
        </LogoS>
        <div><Navbar/></div>
    </HeaderS>
  )
}

export default Header