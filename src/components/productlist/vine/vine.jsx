import "./vine.css"
import React from 'react'
import { useState } from 'react'
import { vine } from "../../database/basevine"

export const Vine = () => {
  
     //const [simle,setsimple] = useState(false)
     const [list,setlist]= useState([])
     const [menudis,setmenudis] =useState(true)
     const [sub_menu,set_sub_menu] = useState(false)
     const [sub_menu_list,set_sub_list] = useState([])

     function addv(e){
          let arr = []
          const text = e.target.textContent
          let element = {name:text,count:0}
          
          console.log(element)
          //setlist(add)
          if(list.length===0){
               element.count = 1
               arr.push(element)
               setlist(arr)
               
               console.log(list)
          }
          if(list.length>0){
              if(list.some(el=>el.name===text)){
               let count = list[list.findIndex(el=>el.name===text)].count
       
               list[list.findIndex(el=>el.name===text)].count=count+1
               
               setlist([...list])
              } else{
               let newbludo = {name:text,count:1}
               setlist([...list,newbludo])
               //arr.push(add)

               //setlist([list,...arr])
               console.log(arr)
               console.log(list)
              }
          }
          
          

     }   

     function display(e){
          const target  = e.target.textContent
          console.log(target) 
          setmenudis(false)
          set_sub_menu(true)
          
          let sub_menu = vine.filter(el=>el.producer===target)
          set_sub_list([...sub_menu])

}

     function back(){
          set_sub_menu(false)
          setmenudis(true)
     }

     const copy = () => {
          let text = ""
          //let pr = " "
          list.forEach(el=>(
               text = text+el.name + " - " + el.count +"\n"
          ))
          navigator.clipboard.writeText(text)
        }

    const menu_vine = [  "вининком",
                         "тре бикьери",
                         "симпл",
                         "ладога",
                         "классика",
                         "аст",
                         "Алкостиль",
                         "вайнстудио",
                         "???" ]
    
    return (
   <div className="warp">
        <div className={menudis?"menu_vine":"menu_vine none"}>
           {menu_vine.map(data=>(
               <button onClick={display}>{data}</button>
           ))}
        </div>
     
        <div className={sub_menu?"menu_vine":"list none"}>
        {sub_menu_list.map(data=>(
          <button onClick={addv}>{data.name}</button>
        ))}
       <button className="bt" onClick={back}>назад</button>
        </div>
        
        
        <div className="list">
          <h1 className="zakaz">Заказ</h1>
          {list.map(data=>(
               <div className="name">{data.name} - {data.count}</div>
          ))}
        </div>
        <button onClick={copy}>copy</button>
   </div>
  )
}