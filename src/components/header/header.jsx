import React from 'react'
import { Button } from "../button/button"
import { telegram } from '../hooks/usetelegramApp';

export const Header = () => {

const {user,onclose} = telegram();

  return (
    <div className={'header'}>
        <Button onClick={onclose}>кнопка</Button>
        <span className={'username'}>Имя - {user}</span>
    </div>
  )
}
