import "./vine.css"
import React from 'react'
import { useState } from 'react'
import { vine } from "../database/basevine"

export const Vine = () => {
  
     const [simle,setsimple] = useState(false)
     const [list,setlist]= useState([])

     function addv(e){
          let arr = []
          const add = e.target.textContent
          console.log(add)
          //setlist(add)
          if(list.length===0){
               arr.push(add)
               setlist([...arr])
               
               console.log(list)
          }
          if(list.length>0){
               arr.push(add)
               setlist([list,...arr])
               console.log(arr)
               console.log(list)
          }
          
          

     }   

     function display(){
          setsimple(true)
     }

     const copy = () => {
          let text = ""
          list.forEach(el=>(
               text = text+el+"\n"
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
        <div className="menu_vine">
           {menu_vine.map(data=>(
               <button onClick={display}>{data}</button>
           ))}
        </div>
        <div className={simle? "simle" :"simple none"}>
         {vine.filter((data)=>data.producer==="симпл").map(el=>(
          <button onClick={addv}>{el.name}</button>
         ))}
        </div>
        <div className="list">
          <h1 className="zakaz">Заказ</h1>
          {list.map(data=>(
               <div className="name">{data}</div>
          ))}
        </div>
        <button onClick={copy}>copy</button>
   </div>
  )
}