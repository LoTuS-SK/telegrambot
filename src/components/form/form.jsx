import React from 'react'
import "./form.css"

export const Form = () => {
  return (
    <div>
        <input type="text" className='form'placeholder='Имя'/>
        <input type="number" className='form' placeholder='количество гостей'/>
    </div>
  )
}
