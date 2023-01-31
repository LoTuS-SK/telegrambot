import React from 'react'
import {vine} from "../../../database/basevine"
import "./vine.css"
import { useState } from 'react'

export const Vine = ({add,display,set_vine_display,back}) => {
  
  const menu_vine = ["красное","белое","По бокалам","Игристое","Розовое"]
  const vine_bokals = vine.filter(data=>data.price<1000)
  const vine_menu_country = [...new Set(vine.map((data)=>(data.country )))]
  
  const [vine_spark_dispaly,set_vine_spark_display] =useState(false)
  const vine_spark = vine.filter(data=>data.type==="Игристое")
  const [vine_pink_dispaly,set_vine_pink_display] = useState(false)
  const vine_pink = vine.filter(data=>data.type==="розовое")


  const [display_redvine ,displaysetRedVine] = useState(false)
  
  const [selet_red_vine,set_select_red_vine] = useState([])
  const [selet_vine,set_select_vine] = useState("")
  
  const [display_bokal,set_display_bokal]= useState(false)
  const [display_vine_menu_country,set_display_vine_menu_country]= useState(false)


  function vine_cl(e){
    const select = e.target.textContent
    console.log(select)
    console.log((vine_menu_country))

    switch (select) {
      case "По бокалам":
        set_display_bokal(true)
        set_vine_display(false)
        
        break;
        case "красное":
        set_display_vine_menu_country(true)
        set_vine_display(false)
        set_select_vine("красное")

        break;
        case "белое":
        set_display_vine_menu_country(true)
        set_vine_display(false)
        set_select_vine("белое")


        break;
        case "Игристое":
        set_vine_spark_display(true)
        set_vine_display(false)
        break;

        case "Розовое":
        set_vine_pink_display(true)
        set_vine_display(false)
        break;
    
      default:
        break;
    }
    
  }

  function countryREd(e){
  const select = e.target.textContent
  set_select_red_vine([...vine.filter(data=>data.country===select && data.type===selet_vine)])
  displaysetRedVine(true)
  set_display_vine_menu_country(false)
  
  }

  function back_vine(){
    set_vine_display(true)
    set_display_bokal(false)
    set_display_vine_menu_country(false)
    displaysetRedVine(false)
    set_vine_spark_display(false)
    set_vine_pink_display(false)
  }

  function back_red_vine(){
    set_display_vine_menu_country(true)
    displaysetRedVine(false)
  }
  
    return (
    <>
        <div className={display?"menu_vine":"menu_vine none"}>
        {menu_vine.map(data=>(
            <button onClick={vine_cl}>{data}</button>
        ))}
        <button onClick={back}>назад</button>
        </div>
        <div className={display_bokal?"vine_bokals":"vine_bokals none"}>
          {vine_bokals.map((data)=>(
            <button onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_vine}>назад</button>
          </div>
          
         <div className={display_vine_menu_country?"vine_bokals":"vine_bokals none"}>
          {vine_menu_country.map(data=>(
            <button onClick={countryREd}>{data}</button>
          ))}
          <button onClick={back_vine}>назад</button>
          </div>
          
          <div className={display_redvine?"vine_bokals":"vine_bokals none"}>
          {selet_red_vine.map(data=>(
            <button onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_red_vine}>назад</button>
        </div>

        <div className={vine_spark_dispaly?"vine_bokals":"vine_bokals none"}>
          {vine_spark.map(data=>(
            <button onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_vine}>назад</button>
        </div>

        <div className={vine_pink_dispaly?"vine_bokals":"vine_bokals none"}>
          {vine_pink.map(data=>(
            <button onClick={add}>{data.name}</button>
          ))}
          <button onClick={back_vine}>назад</button>
        </div>


    </>
  )
}
