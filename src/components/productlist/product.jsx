import React from 'react'
import {base,salad,bake,soup} from "../database/database"
import { useState } from 'react'
import "./product.css"
import { useEffect } from 'react'


//

export const Product = () => {
  
  const [items,setitems] = useState([])
  
  const [list_salad,setlistaslad]=useState([])
  const [snake_display,set_snake_display] = useState(false)
  const [salad_display,set_salad_display] = useState(false)
  const [menu1_display,set_menu1_display] = useState(true)
  const [soup_display,set_soup_display] = useState(false)
  const [bake_dispaly,set_bake_display] = useState(false)
  
  
  
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
    if(dispaly === "Супы"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(true)
    }
    if(dispaly === "Печь"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(true)
    }
  
  }
  
   const back = () =>{
    set_snake_display(false)
    set_menu1_display(true)
    set_salad_display(false)
    set_soup_display(false)
    set_bake_display(false)
  }
  
  useEffect(()=>{
    saladd()
},[items])





 

   function add(e){
    
    const text = e.target.textContent;

    if(items.length===0){
   
    let newbludo = {name:text,count:1}
     setitems([...items,newbludo])
     console.log(items)
    
    }

    if(items.length>=1){
      if(items.some(el=>el.name===text)){
        let count = items[items.findIndex(el=>el.name===text)].count
       
        items[items.findIndex(el=>el.name===text)].count=count+1
        
        setitems([...items])
        

      } else{
        let newbludo = {name:text,count:1}
        setitems([...items,newbludo])
        
      }
    }
    
    console.log(items)
    saladd()

   
  }

  function saladd(){
    let arr = []
      for( let elem of salad ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
           console.log(elem)
        }
       }
      }
        setlistaslad(arr)
  }

  
   
function del(e){
  let item = e.target.textContent
  console.log(item)

}

  const menu1 = ["Закуски","Салаты","Печь","Горячее Блюда","Гриль","Супы"]


const copy = () => {
  navigator.clipboard.writeText("'Hello!")
}

return (
    <div className={"menu"}>
      <div className={menu1_display ? "menu-items": "menu-items none" }>
            {menu1.map(element=>(<button onClick={displaySnake}>{element}</button>))}
            {/* <button onClick={back}>назад</button> */}
      </div>
      
      <div className={snake_display ? "snakes " : "snakes none" }>
            {base.map(data1=>(<button onClick={add}>{data1.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      <div className={salad_display?"salad":"salad none"}>
            {salad.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      <div className={soup_display?"soup":"salad none"}>
            {soup.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={bake_dispaly?"bake":"bake none"}>
            {bake.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      
      


      <div className="list">
      <h3 className="sank">закуски</h3>
     
      <h3 className="s1">общий</h3>
      {
        items.map(el=><div>{el.name} - {el.count}</div>)
      }
     
      </div>
      <h3 className="sank">Салаты</h3>
      {
        list_salad.map(el=>(<div onClick={del}>{el.name}- {el.count}</div>))
      }
      <button onClick={copy}>copy</button>
    </div>
  )
       }       