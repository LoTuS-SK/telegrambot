import React from 'react'
import { useState } from 'react'
import "./form.css"

export const Form = () => {

    const [name,setname] = useState("Sergey")
    //const [number,setnamber]= useState(0)

    const onchane =(e)=>{
        setname(e.target.value)
    }

  return (
    <div className={'form'}>
        <input 
        type="text" 
        className='input'
        placeholder='Имя'
        value={name}
        onChange={onchane}
        
        />
        <input type="number" className={'input'} placeholder='количество гостей'/>
    </div>
  )
}
