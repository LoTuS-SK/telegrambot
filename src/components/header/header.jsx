import React from 'react'
import { Button } from "../button/button"
import { telegram } from '../hooks/usetelegramApp';

export const Header = () => {

const {user,ontogglebutton} = telegram();

  return (
    <div className={'header'}>
        <Button onClick={ontogglebutton}>Закрыть</Button>
        <span className={'username'}>Имя - {user}</span>
    </div>
  )
}
