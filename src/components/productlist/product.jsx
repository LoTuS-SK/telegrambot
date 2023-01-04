import React from 'react'
import { base , salad, bake , hotdish, soup , onFire, garnish, bread, sweets } from "../database/database"
import { useState } from 'react'
import "./product.css"
import { useEffect } from 'react'
import { useCallback } from 'react'



//

export const Product = () => {
  
  const [items,setitems] = useState([])
  const [list_salad,setlistaslad]=useState([])
  const [list_salad_header,setlist_salad_header]= useState(false)
  
  
  const [snake_display,set_snake_display] = useState(false)
  const [salad_display,set_salad_display] = useState(false)
  const [menu1_display,set_menu1_display] = useState(true)
  const [soup_display,set_soup_display] = useState(false)
  const [bake_dispaly,set_bake_display] = useState(false)
  const [hotdish_dispaly,set_hotdish_display] = useState(false)
  const [onFire_dispaly,set_onFire_display] = useState(false)
  const [garnish_dispaly,set_garnish_display] = useState(false)
  const [bread_dispaly,set_bread_display] = useState(false)
  const [sweets_dispaly,set_sweets_display] = useState(false)
  
  
  
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
    if(dispaly === "Горячее Блюда"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(true)
    }
    if(dispaly === "Гриль"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(true)
    }
    if(dispaly === "Гарнир"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(true)
    }
    if(dispaly === "Хлеб"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(false)
      set_bread_display(true)
    }
    if(dispaly === "Cладкое"){
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(false)
      set_bread_display(false)
      set_sweets_display(true)
    }
  
  }
  
   const back = () =>{
    set_snake_display(false)
    set_menu1_display(true)
    set_salad_display(false)
    set_soup_display(false)
    set_bake_display(false)
    set_hotdish_display(false)
    set_onFire_display(false)
    set_garnish_display(false)
    set_bread_display(false)
    set_sweets_display(false)
    
  }
  
  // function saladd(){
  //   let arr = []
  //     for( let elem of salad ){
  //      for( let elem2 of items ){
  //        if (elem.name === elem2.name){
  //          elem.count = elem2.count
  //          arr.push(elem)
  //          //console.log(elem)
  //       }
  //      }
  //     }
  //       setlistaslad(arr)
  // }
const sals = useCallback(()=>{
  function saladd(){
    let arr = []
      for( let elem of salad ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
           //console.log(elem)
        }
       }
      }
        setlistaslad(arr)
  }
  saladd()
},[items])

  useEffect(()=>{
    sals()
  },[sals])

  function add(e){
    
    const text = e.target.textContent;

    if(items.length===0){
   
    let newbludo = {name:text,count:1}
     setitems([...items,newbludo])
    
    
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
    
    
    sals()
    if (list_salad) { setlist_salad_header(true) } else { setlist_salad_header(false) } 
  
  }

 
  
   
function del(e){
  const text = e.target.textContent
  const  count = items[items.findIndex(el=>el.name===text)].count
  
  if(count === 1 ){
     const fil = items.filter(el=>el.name !== text) 
      console.log(fil)
      setitems([...fil])
      console.log(items)
    return
  }
  items[items.findIndex(el=>el.name===text)].count=count-1
  setitems([...items])
}

  const menu1 = ["Закуски","Салаты","Печь","Хлеб","Горячее Блюда","Гриль","Гарнир","Супы","Cладкое","напитки"]
const copy = () => {
  navigator.clipboard.writeText("'Hello!")
}

return (
    <div className={"menu"}>
      <div className={menu1_display ? "menu-items": "menu-items none" }>
            {menu1.map(element=>(<button onClick={displaySnake}>{element}</button>))}
            {/* <button onClick={back}>назад</button> */}
      </div>
      {/* закуски */}
      <div className={snake_display ? "snakes " : "snakes none" }>
            {base.map(data1=>(<button onClick={add}>{data1.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      {/* салаты */}
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
      
      <div className={hotdish_dispaly?"bake":"bake none"}>
            {hotdish.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={onFire_dispaly?"bake":"bake none"}>
            {onFire.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={garnish_dispaly?"bake":"bake none"}>
            {garnish.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={bread_dispaly?"bake":"bake none"}>
            {bread.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={sweets_dispaly?"bake":"bake none"}>
            {sweets.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      <div className="list">
      <h3 className="sank">закуски</h3>
     
      <h3 className="s1">общий</h3>
      {
        items.map(el=><div>{el.name} - {el.count}</div>)
      }
     
      </div>
      <h3 className={list_salad_header?"snake":"snake none"}>Салаты</h3>

    
      {
       list_salad.map(el=>(<div onClick={del}><span>{el.name}</span> - {el.count}</div>))
      }
      <button onClick={copy}>copy</button>
    </div>
  )
       }       