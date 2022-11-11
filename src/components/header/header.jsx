import React from 'react'
import { Button } from "../button/button"

export const Header = () => {

    const tg = window.Telegram.WebApp;
    const onclose = ()=>{
  tg.close()
}


  return (
    <div className={'header'}>
        <Button onClick={onclose}>Закрыть</Button>
        <span className={'username'}>Имя - {tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}
