import React from 'react'
import logo from '../assest/img/logo.png'
import './header.scss'



export default function Header() {
  return (
    <div className='header'>
      <img className='header__img' src={logo} alt='logo'></img>
    </div>
  )
}
