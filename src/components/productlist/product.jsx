import React from 'react'
import {base,salad} from "../database/database"
import { useState } from 'react'
import "./product.css"


//

export const Product = () => {
  
  const [items,setitems] = useState([])
  const [snake_display,set_snake_display] = useState(false)
  const [salad_display,set_salad_display] = useState(false)
  const [menu1_display,set_menu1_display] = useState(true)
  
  function add(e){
    
    const text = e.target.textContent;

    if(items.length===0){
   
    let newbludo = {name:text,count:1}
    setitems([...items,newbludo])
    }
    if(items.length>=1){
      if(items.some(el=>el.name===text)){
        let count = items[items.findIndex(el=>el.name===text)].count
        console.log(count)
        let newcount = items[items.findIndex(el=>el.name===text)].count=count+1
        console.log(newcount)
        setitems([...items])

      } else{
        let newbludo = {name:text,count:1}
        setitems([...items,newbludo])
      }
    }
  }

  const menu1 = ["Закуски","Салаты","Печь","Горячее Блюда","Гриль"]

const displaySnake = (e) =>{
  
  const dispaly = e.target.textContent
  
  if(dispaly === "Салаты"){
    set_snake_display(false)
    set_menu1_display(false)
    set_salad_display(true)
  }
  if(dispaly === "Закуски"){
    set_snake_display(true)
    set_menu1_display(false)
    set_salad_display(false)
  }
  
}

const back = () =>{
  set_snake_display(false)
  set_menu1_display(true)
  set_salad_display(false)
}



return (
    <div className={"menu"}>
      <div className={snake_display ? "snakes " : "snakes none" }>
        
      {
      base.map(data1=>(<button onClick={add}>{data1.name}</button>))
      }
      
     
      <button onClick={back}>назад</button>
      </div>
      <div className={salad_display?"salad":"salad none"}>
        {salad.map(data=>(<button onClick={add}>{data.name}</button>))}
        <button onClick={back}>назад</button>
      </div>
      
      <div className={menu1_display ? "menu-items": "menu-items none" }>
            {menu1.map(element=>(<button onClick={displaySnake}>{element}</button>))}
            <button onClick={back}>назад</button>
      </div>



      {
       items.map(el=>(<div className="d">{el.name} - {el.count}</div>))
      }
      
    </div>
  )
       }       
      
     