import React from 'react'
import "./bar.css"
import {coffe , lemonade, hotdrinks,tee,cocktails,tincture,drinks} from "../../database/basebar"
import { useState } from 'react'
import { Strong } from './strong/strong'
import { Vine } from "./vine/vine"


export const Bar = ({add,back,display,name2}) => {
  
  const [cofe_dispaly,set_cofe_display]= useState(false)
  const [lemonade_dispaly,set_lemonade_display]= useState(false)
  const [hotdrinks_display,set_hotdrinks_display]= useState(false)
  const [tee_display,set_tee_display]= useState(false)
  const [cocktails_display,set_cocktails_display]= useState(false)
  const [tincture_display,set_tincture_display]= useState(false)
  const [drinks_display,set_drinks_display]= useState(false)
  const [strong_display,set_strong_display]= useState(false)
  const [vine_dispaly,set_vine_display] = useState(false)


  function select(e){
    const select = e.target.textContent
    console.log(select)
    if(select==="кофе"){
      set_cofe_display(true)
      name2(false)
    }
    if(select==="лимонады"){
      set_cofe_display(false)
      name2(false)
      set_lemonade_display(true)
    }
    if(select==="горячие напитки"){
      
      name2(false)
      set_hotdrinks_display(true)
      
    }
    if(select==="чай"){
       name2(false)
      set_tee_display(true)
    }
    if(select==="коктели"){
      name2(false)
      set_cocktails_display(true)
    }
    if(select==="настойки"){
      set_tincture_display(true)
      name2(false)
    }
    if(select==="настойки"){
      set_tincture_display(true)
      name2(false)
    }
    if(select==="настойки"){
      set_tincture_display(true)
      name2(false)
    }
    if(select==="БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ"){
      set_drinks_display(true)
      name2(false)
    }
    if(select==="крепкий алкоголь"){
      set_strong_display(true)
      name2(false)
    }
    if(select==="Вино"){
      set_vine_display(true)
      name2(false)
      console.log("yes")
    }

  }
function back_bar(){
  name2(true)
  set_cofe_display(false)
  set_lemonade_display(false)
  set_hotdrinks_display(false)
  set_tee_display(false)
  set_cocktails_display(false)
  set_tincture_display(false)
  set_drinks_display(false)
}

function back2(a){
  name2(true)
  set_strong_display(false)
  set_vine_display(false)

}

// function str_menu(a){
//   set_strong_display(a)
// }



  const menu_bar = ["кофе",
                    "лимонады",
                    "горячие напитки",
                    "чай",
                    "Вино",
                    "коктели",
                    "настойки",
                    "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ",
                    "крепкий алкоголь"
                       ]
  
    return (
   <>
   <div className={display?'bar-menu':"bar-menu none"}>
      {menu_bar.map(data=>(
          <button onClick={select}>{data}</button>
          
      ))}
      <button onClick={back}>назад</button>
      </div>
      <div className={cofe_dispaly?"cofe":"cofe none"}>
          {coffe.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={lemonade_dispaly?"cofe":"cofe none"}>
          {lemonade.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={hotdrinks_display?"cofe":"cofe none"}>
          {hotdrinks.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={tee_display?"cofe":"cofe none"}>
          {tee.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={cocktails_display?"cofe":"cofe none"}>
          {cocktails.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={tincture_display?"cofe":"cofe none"}>
          {tincture.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <div className={drinks_display?"cofe":"cofe none"}>
          {drinks.map(data=>(
              <button className="display" onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_bar}>назад</button>
      </div>
      <Strong add={add} display={strong_display} back={back2} set_strong_display={set_strong_display}/>
      <Vine add={add} display={vine_dispaly} set_vine_display={set_vine_display} back={back2}/>

    </>
  )
}
