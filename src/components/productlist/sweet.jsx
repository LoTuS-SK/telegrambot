import React from 'react'
import { useState } from 'react'
//import { sweets } from "../database/database"
const sweets = [
    {id:1,name:"Крем-брюле",price:400,weight:120,section:"сладкое"},
    {id:1,name:"Творожник из печи",price:400,weight:160,section:"сладкое"},
    {id:1,name:"Медовик на гречишном меду",price:420,weight:170,section:"сладкое"},
    {id:1,name:"Штрудель яблочный",price:420,weight:190,section:"сладкое"},
    {id:1,name:"Карамельный дечерт с малиной",price:450,weight:150,section:"сладкое"},
    {id:1,name:"Маковый десерт",price:450,weight:225,section:"сладкое"},
    {id:1,name:"Миндальное безе с черносливом",price:450,weight:150,section:"сладкое"},
    {id:1,name:"Миндальное безе с черносливом 1кг",price:3500,weight:1000,section:"сладкое"},
    {id:1,name:"Сметанник со свежими ягодами",price:450,weight:190,section:"сладкое"},
    {id:1,name:"Сметанник со свежими ягодами 1кг",price:3500,weight:1000,section:"сладкое"},
    {id:1,name:"Воздушный мусс из маракуйи с кокосовой панна-коттой Маковый",price:490,weight:150,section:"сладкое"},
    {id:1,name:"Шоколадный фондант с шариком пломбира",price:580,weight:140,section:"сладкое"},
    {id:1,name:"Десерт Павлова со свежими ягодами и ванильным кремом",price:650,weight:210,section:"сладкое"},
    {id:1,name:"Домашний Наполеонт",price:450,weight:170,section:"сладкое"},
    {id:1,name:"Сосновые шишки",price:150,weight:70,section:"варенье"},
    {id:1,name:"Белая черешня",price:150,weight:70,section:"варенье"},
    {id:1,name:"Вишневое",price:150,weight:70,section:"варенье"},
    {id:1,name:"Гречкий орех",price:150,weight:70,section:"варенье"},
    {id:1,name:"Клубничное",price:150,weight:70,section:"варенье"},
    {id:1,name:"Айва",price:450,weight:170,section:"сладкое"},
    {id:1,name:"Кизил",price:450,weight:170,section:"сладкое"},
    {id:1,name:"Малина",price:450,weight:170,section:"сладкое"},
    {id:1,name:"Ржаное",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Лен с васильковым медом",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Белые грибы",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Ванильное",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Черника",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Таежный бар",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Чёрная смородина с брусникой",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Черёмуха с вишней и мёдом из белой акаций",price:190,weight:50,section:"мороженое"},
    {id:1,name:"Шоколадное",price:190,weight:50,section:"мороженое"},

]



export const Sweet = ({add,back,display}) => {

function menu_sweet(e){

    const display = e.target.textContent
    console.log(display)
    if(display==="Мороженое"){
        set_sweet_decert(false)
        set_sweet_djem(false)
        set_sweet_ice(true)
        
    }
    if(display==="Варенье"){
    set_sweet_decert(false)
    set_sweet_djem(true)
    set_sweet_ice(false)
    
    }
    if(display==="Десерты"){
    set_sweet_decert(true)
    set_sweet_djem(false)
    set_sweet_ice(false)
    
}
}

function back_sweet(){
    set_sweet_decert(false)
    set_sweet_djem(false)
    set_sweet_ice(false)
        
}

    const sweetsmenu = ["Десерты","Мороженое","Варенье"]
    
    const [sweet_ice,set_sweet_ice]= useState(false)
    const [sweet_djem,set_sweet_djem]= useState(false)
    const [sweet_decert,set_sweet_decert]= useState(false)
    
    const ice = sweets.filter((el)=>el.section==="мороженое")

    return (
    <div>
       
       <div className={display?"bake":"bake none"}>
            {sweetsmenu.map(data=>(<button onClick={menu_sweet}>{data}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={sweet_ice?"ice":"ice none"}>
           {ice.map(data=>(
            <button onClick={add}>{data.name}</button>
           ))}
            <button onClick={back_sweet}>назад</button>
      </div>
      <div className={sweet_djem?"djem":"ice none"}>
            {sweets.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back_sweet}>назад</button>
      </div>
      <div className={sweet_decert?"decert":"ice none"}>
            {sweets.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back_sweet}>назад</button>
      </div>


    </div>
  )
}
