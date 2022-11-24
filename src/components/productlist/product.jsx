import React from 'react'
import {base} from "../database/database"
import { useState } from 'react'
import "./product.css"


//

export const Product = () => {
  
  const [items,setitems] = useState([])
  const [display,setdisplay] = useState(true)
  
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

const displaySnake = () =>{
      setdisplay(false)
}


return (
    <div className={"menu"}>
      <div className={display ? "snakes none" : "snakes" }>
      {
      base.map(data1=>(<button onClick={add}>{data1.name}</button>))
      }
      </div>
      <div className={display ? "menu-items" : "menu-items none"}>
            {menu1.map(element=>(<button onClick={displaySnake}>{element}</button>))}
      </div>



      {
       items.map(el=>(<div className="d">{el.name} - {el.count}</div>))
      }
      
    </div>
  )
       }       
      
     