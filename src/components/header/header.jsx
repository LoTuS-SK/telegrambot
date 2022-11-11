import React from 'react'
import { Button } from "../button/button"
import { telegram } from '../hooks/usetelegramApp';

export const Header = () => {

const {onclose,user} = telegram();

  return (
    <div className={'header'}>
        <Button onClick={onclose}>Закрыть</Button>
        <span className={'username'}>Имя - {user}</span>
    </div>
  )
}
