import React from 'react'
//import { Button } from "../button/button"
//import { telegram } from '../hooks/usetelegramApp';
import { Link } from 'react-router-dom'
//import { Product } from '../productlist/product'
import "../header/header.css"

export const Header = () => {

//const {user,ontogglebutton} = telegram();

  return (
    <div className={'header'}>
        <button><Link to="/vine">Вино</Link></button>
        <button><Link to="/kitchen">Кухня</Link></button>
       
    </div>
  )
}
