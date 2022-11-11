import React from 'react'
import { Button } from "../button/button"

export const Header = () => {

    const tg = window.Telegram.WebApp;
    const onclose = ()=>{
  tg.close()
}


  return (
    <div className={'header'}>
        <Button onclick={onclose}>Закрыть</Button>
        <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}
