import React from 'react'
import"./strong.css"
import {strong} from "../../../database/basebar"
import { useState } from 'react'

export const Strong = ({add,back,display,set_strong_display}) => {
  
    const menu_strong = ["виски","джин","водка","коньяк"]

   

    const [select_strong,set_select_strong] = useState([])
    
    const [display_wiskwy,set_wiskey_display]= useState(false)

    function back_strong(){
        set_strong_display(true)
        set_wiskey_display(false)
    }

    function strong_menu(e){
        const elemet = e.target.textContent
        // if (elemet==="Виски"){
        //     set_wiskey_display(true)
        //     set_strong_display(false)
        // }
        set_wiskey_display(true)
        set_select_strong([...strong.filter(data=>data.section===elemet)])
        console.log(select_strong)
        set_strong_display(false)

    }
  
    return (
    <>
    <div className={display?"flex":"flex none"}>
        {menu_strong.map((data)=>(
            <button onClick={strong_menu}>{data}</button>
            
        ))}
        <button onClick={back}>назад</button>
    </div>
    <div className={display_wiskwy?"flex":"flex none"}>
        {select_strong.map((data)=>(
            <button onClick={add}>{data.name}</button>
            
        ))}
        <button onClick={back_strong}>назад</button>
    </div>
    </>
  )
}
