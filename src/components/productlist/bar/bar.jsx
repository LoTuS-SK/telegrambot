import React from 'react'
import "./bar.css"
//import {drinks} from "../../database/basebar"
//import { useState } from 'react'


export const Bar = ({add,back,display}) => {
  
  //const [drinks_dispaly,set_drinks_display]= useState(false)



  const menu_bar = ["кофе",
                    "лимонады",
                    "чай",
                    "вино",
                    "коктели",
                    "настойки",
                    "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ",
                       ]
  
    return (
   <>
   <div className={display?'bar-menu':"bar-menu none"}>
      {menu_bar.map(data=>(
          <button>{data}</button>
          
      ))}
      <button onClick={back}>назад</button>
      

    </div>

    </>
  )
}
