import React from 'react'
import { useState } from 'react'
import "./form.css"
import { telegram } from "../../components/hooks/usetelegramApp"
import { useEffect } from 'react'

export const Form = () => {

    const [name,setname] = useState("")
    const [number,setnamber]= useState("")
    const {tg} = telegram();

    useEffect(()=>{
        tg.MainButton.setParams({
            text:"отправить"
        })
    },[])
   

    useEffect(()=>{
        if(!name||!number){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
       
    },[name,number])


    const onchanename =(e)=>{
        setname(e.target.value)
    }
    const onchangtel =(e)=>{
        setnamber(e.target.value)
    }

  return (
    <div className={'form'}>
        <input 
        type="text" 
        className='input'
        placeholder='Имя'
        value={name}
        onChange={onchanename}
        
        />
        <input type="number" className={'input'} placeholder='количество гостей'/>
        <input 
        type="tel" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        className={'input'}
        onChange={onchangtel}
        value={number} 
        placeholder='номер телефона'/>
        <input type="date" className={'input'} placeholder='дата мероприятия'/>
        <select className="input">
            <option>гостинная</option>
            <option>Печь</option>
            <option>гриль</option>
        </select>
        
         
    </div>
  )
}
