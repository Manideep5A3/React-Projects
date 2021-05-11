import React from 'react'
import '../Css/Header.css'
import logo from '../Images/logo.png'

function Header() {
    return (
        <div className = "header">
            <img src ={logo} alt ='' className ="header__img"></img>
        </div>
    )
}

export default Header
