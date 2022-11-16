import React from 'react'
import { useState } from 'react'
import "./form.css"
import { telegram } from "../../components/hooks/usetelegramApp"
import { useEffect } from 'react'

export const Form = () => {

    const [name,setname] = useState("")
    const [count,setcount]= useState("")
    const [tel,setFon]= useState("")
    const {tg} = telegram();
    tg.MainButton.show()

    useEffect(()=>{
        tg.MainButton.setParams({
            text:"отправить"
        })
    },[])
   

    useEffect(()=>{
        if(!name || !count){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
       
    },[ name, count ])


    const onchanename =(e)=>{
        setname(e.target.value)
    }
    const onchangcount =(e)=>{
        setcount(e.target.value)
    }
    const onchangtel =(e)=>{
        setFon(e.target.value)
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
        <input 
        type="number" 
        className={'input'}
        placeholder='количество гостей'
        value={count}
        onChange={onchangcount} 
        />
        
        <input 
        type="tel" 
        className={'input'}
        
        value={tel} 
        placeholder='номер телефона'
        onChange ={onchangtel} 
        />
        
        <input type="date" className={'input'} placeholder='дата мероприятия'/>
        
        <select className="input">
            <option>гостинная</option>
            <option>Печь</option>
            <option>гриль</option>
        </select>
        
         
    </div>
  )
}
