import React from 'react'
import { base , salad, Bake , hotbluda, soup , onFire, garnish, bread, Sweets , aqua , sous} from "../database/database"
import { useState } from 'react'
import "./product.css"
import { useEffect } from 'react'
import { useCallback } from 'react'
import { Sweet } from './sweet'
import { Bar } from './bar/bar'
import { Header } from "../header/header"
import {coffe , lemonade, hotdrinks,tee,cocktails,tincture,drinks,strong} from "../database/basebar"
import { vine } from '../database/basevine'




export const Product = () => {
  
  const [items,setitems] = useState([])
  const [list_salad,setlistaslad]=useState([])
  const [list_snakes,set_list_snakes]=useState([])
  const [list_hotdish,set_list_hotdish]=useState([])
  const [list_soup,set_list_soup]=useState([])
  const [list_onFire,set_list_onFire]=useState([])
  const [list_bake,set_list_bake]=useState([])
  const [list_sweets,set_list_sweets]=useState([])
  const [list_garnish,set_list_garnish]=useState([])
  const [list_aqua,set_list_aqua]=useState([])
  const [list_bread,set_list_bread]=useState([])
  const [list_sous,set_list_sous]=useState([])
  const [list_bar_alko,set_list_bar_alko]=useState([])
  const [list_bar,set_list_bar]=useState([])
  const [list_bar_l,set_list_bar_l]=useState([])
  const [list_bar_t,set_list_bar_t]=useState([])
  const [list_bar_h,set_list_bar_h]=useState([])
  const [list_bar_coc,set_list_bar_coc]=useState([])
  const [list_bar_tin,set_list_bar_tin]=useState([])
  const [list_bar_dr,set_list_bar_dr]=useState([])
  const [list_vine,set_list_vine]=useState([])

  const copy = () => {
    let text = ""
    //let line1= "--------------------------"
    // let line2 ="_____________________________________"
    //let line3 ="*********************************************************"

    if (list_salad.length>0){
     // text+=line3 + "\n"
     // text+="              *Cалаты*\n"
     // text+=line3 + "\n"
      list_salad.forEach(el=>(
        //text+=el.name + "  -  " + el.count +"шт"+ " - "+el.count*el.price+"₽"+"\n  "+ line2 + "\n"
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
      ))
    }
    if (list_aqua.length>0){
     // text+=line3 + "\n"
      text+="              *Аквариум*\n"
     // text+=line3 + "\n"
      list_aqua.forEach(el=>(
        //text+=el.name + "  -  " + el.count +"шт"+ " - "+el.count*el.price+"₽"+"\n  "+ line2 + "\n"
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
      ))
    }
    if (list_garnish.length>0){
      text+=line3 + "\n"
      text+="              *Гарнир*\n"
      text+=line3 + "\n"
      list_garnish.forEach(el=>(
        //text+=el.name + "  -  " + el.count +"шт"+ " - "+el.count*el.price+"₽"+"\n  "+ line2 + "\n"
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
      ))
    }


    if (list_snakes.length>0){
     // text+=line3 + "\n"
      text+="              *Закуски*\n"
      text+=line3 + "\n"
      list_snakes.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
      ))
    }

    if (list_hotdish.length>0){
     // text+=line3 + "\n"
      text+="             *Горячие Блюда*\n"
     // text+=line3 + "\n" list_hotdish.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      
    }
    if (list_bake.length>0){
      text+=line3 + "\n"
      text+="               *Печь*\n"
      text+=line3 + "\n"
      list_bake.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
     }
    if (list_soup.length>0){
      text+=line3 + "\n"
      text+="             *Супы*\n"
      text+=line3 + "\n"
      list_soup.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    if (list_onFire.length>0){
      text+=line3 + "\n"
      text+="              *Гриль*\n"
      text+=line3 + "\n"
      list_onFire.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    if (list_sweets.length>0){
      text+=line3 + "\n"
      text+="              *Сладкое*\n"
      text+=line3 + "\n"
      list_sweets.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    if (list_bread.length>0){
      text+=line3 + "\n"
      text+="               *Хлеб*\n"
      text+=line3 + "\n"
      list_bread.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }
    if (list_bar_alko.length>0){
      text+=line3 + "\n"
      text+="               *Алкогольные напитки*\n"
      text+=line3 + "\n"
      list_bar_alko.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    if (list_vine.length>0){
      text+=line3 + "\n"
      text+="       *Вино*\n"
      text+=line3 + "\n"
      list_vine.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    if (list_bar_l.length>0 || list_bar_dr.length>0 || list_bar_h.length>0 || list_bar.length>0 || list_bar_t.length>0) {
      text+=line3 + "\n"
      text+="       Напитки\n"
      text+=line3 + "\n"
      
      list_bar.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
      
      list_bar_l.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
      list_bar_dr.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
      list_bar_h.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽\n ${line2} \n`
        
      ))
      list_bar.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
      list_bar_t.forEach(el=>(
        text+=`${el.name} - ${el.count} шт - ${el.count*el.price} ₽ \n ${line2} \n`
        
      ))
    }

    text+= "*Итого* - " + new Intl.NumberFormat('ru-RU').format(sum) +"₽"

    

   
    navigator.clipboard.writeText(text)

      
  }
  
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
  const [aqua_dispaly,set_sweets_aqua] = useState(false)
  const [sous_dispaly,set_displa_sous] = useState(false)
  const [bar_display,set_bardispaly] = useState(false)
  
  const [sum,set_sum] = useState(0)

  // function summa(){
  //   let value = 0
    
  //   let sum = list_salad.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum2 = list_snakes.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum3 = list_hotdish.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum4 = list_soup.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum5 = list_onFire.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum6 = list_bake.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum7 = list_sweets.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum8 = list_garnish.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum9 = list_aqua.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum11 = list_bread.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum12 = list_sous.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum13 = list_bar_alko.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum14 = list_bar.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum15 = list_bar_l.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum16 = list_bar_t.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum17 = list_bar_coc.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum18 = list_bar_tin.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum19 = list_bar_dr.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum20 = list_bar_h.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   let sum21 = list_vine.reduce((acc,el)=>acc+(el.price*el.count),value)
  //   //let sum22 = list_vine.reduce((acc,el)=>acc+(el.price*el.count),value)
    


  //   set_sum(sum+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum11+sum12+sum13+sum14+sum15+sum16+sum17+sum18+sum19+sum20+sum21)
  // }
  

  const summa1 = useCallback(()=>{
 function summa(){
    let value = 0
    
    let sum = list_salad.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum2 = list_snakes.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum3 = list_hotdish.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum4 = list_soup.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum5 = list_onFire.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum6 = list_bake.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum7 = list_sweets.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum8 = list_garnish.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum9 = list_aqua.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum11 = list_bread.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum12 = list_sous.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum13 = list_bar_alko.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum14 = list_bar.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum15 = list_bar_l.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum16 = list_bar_t.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum17 = list_bar_coc.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum18 = list_bar_tin.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum19 = list_bar_dr.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum20 = list_bar_h.reduce((acc,el)=>acc+(el.price*el.count),value)
    let sum21 = list_vine.reduce((acc,el)=>acc+(el.price*el.count),value)
    //let sum22 = list_vine.reduce((acc,el)=>acc+(el.price*el.count),value)
    
    set_sum(sum+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum11+sum12+sum13+sum14+sum15+sum16+sum17+sum18+sum19+sum20+sum21)


  }

  summa()

},[list_salad,list_vine,list_bar_h,list_bar_dr,list_bar_tin,list_bar_coc,list_bar_t,list_bar_l,
  list_bar,list_bar_alko,list_sous,list_bread,list_aqua,list_garnish,list_sweets,list_bake,list_onFire,list_soup,
  list_hotdish,list_snakes
])
  
  function displaySnake(e) {

    const dispaly = e.target.textContent

    if (dispaly === "Салаты") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(true)
    }
    if (dispaly === "Закуски") {
      set_snake_display(true)
      set_menu1_display(false)
      set_salad_display(false)
    }
    if (dispaly === "Супы") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(true)
    }
    if (dispaly === "Печь") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(true)
    }
    if (dispaly === "Горячие Блюда") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(true)
    }
    if (dispaly === "Гриль") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(true)
    }
    if (dispaly === "Гарнир") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(true)
    }
    if (dispaly === "Хлеб") {
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
    if (dispaly === "Cладкое") {
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
    if (dispaly === "Аквариум") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(false)
      set_bread_display(false)
      set_sweets_display(false)
      set_sweets_aqua(true)
    }
    if (dispaly === "Соус") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(false)
      set_bread_display(false)
      set_sweets_display(false)
      set_sweets_aqua(false)
      set_displa_sous(true)
    }
    if (dispaly === "напитки") {
      set_snake_display(false)
      set_menu1_display(false)
      set_salad_display(false)
      set_soup_display(false)
      set_bake_display(false)
      set_hotdish_display(false)
      set_onFire_display(false)
      set_garnish_display(false)
      set_bread_display(false)
      set_sweets_display(false)
      set_sweets_aqua(false)
      set_displa_sous(false)
      set_bardispaly(true)
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
    set_sweets_aqua(false)
    set_displa_sous(false)
    set_bardispaly(false)
  }
  

const sals = useCallback(()=>{
  function saladd(){
    let arr = []
      for( let elem of salad ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
        setlistaslad(arr)
        // console.log(arr)
        // let value = 0
        // let sum = list_salad.reduce((acc,el)=>acc+(el.price*el.count),value)
        // set_sum(sum)
        
  }
  function snakes(){
    let arr = []
      for( let elem of base ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
        set_list_snakes(arr)
  }
  function hotdish(){
    let arr = []
      for( let elem of hotbluda){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_hotdish(arr)
  }
  function soupf(){
    let arr = []
      for( let elem of soup){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_soup(arr)
  }
  function onfire(){
    let arr = []
      for( let elem of onFire){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_onFire(arr)
  }
  function bake(){
    let arr = []
      for( let elem of Bake){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bake(arr)
  }
  function sweets(){
    let arr = []
      for( let elem of Sweets){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_sweets(arr)
  }
  function gar(){
    let arr = []
      for( let elem of garnish){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_garnish(arr)
  }
  function Aqua(){
    let arr = []
      for( let elem of aqua){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_aqua(arr)
  }
  function Bread(){
    let arr = []
      for( let elem of bread){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bread(arr)
  }
  function Sous(){
    let arr = []
      for( let elem of sous){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_sous(arr)
  }
  function bar_w(){
    let arr = []
      for( let elem of strong ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_alko(arr)
  }
  function Сoffe(){
    let arr = []
      for( let elem of coffe ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar(arr)
    }
  function vines(){
    let arr = []
    for( let elem of vine ){
     for( let elem2 of items ){
       if (elem.name === elem2.name){
         elem.count = elem2.count
         arr.push(elem)
        
      }
     }
    }
    set_list_vine(arr)
  }

  function bar_l(){
    let arr = []
      for( let elem of lemonade ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_l(arr)
  }
  function bar_h(){
    let arr = []
      for( let elem of hotdrinks ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_h(arr)
  }
  function bar_t(){
    let arr = []
      for( let elem of tee ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_t(arr)
  }
  function bar_coc(){
    let arr = []
      for( let elem of cocktails ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_coc(arr)
  }
  function bar_tin(){
    let arr = []
      for( let elem of tincture ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_tin(arr)
  }
  function bar_dr(){
    let arr = []
      for( let elem of drinks ){
       for( let elem2 of items ){
         if (elem.name === elem2.name){
           elem.count = elem2.count
           arr.push(elem)
          
        }
       }
      }
      set_list_bar_dr(arr)
  }

  
  saladd()
  snakes()
  hotdish()
  soupf()
  onfire()
  bake()
  sweets()
  gar()
  Aqua()
  Bread()
  Sous()
  bar_w()
  bar_coc()
  vines()
  bar_tin()
  Сoffe()
  bar_l()
  bar_dr()
  bar_h()
  bar_t()
  // summa()
  
  
  
},[items])

useEffect(()=>{

   
  summa1()
},[summa1])



  useEffect(()=>{
    sals()
   
    
  },[sals])

  function add(e){
    set_sum(1)
    const text = e.target.textContent;
    console.log(text)

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
    
    }

  function name1(par1) {
    console.log("hi2")
    set_sweets_display(par1)
   
  }

  function name2(par2) {
  
    set_bardispaly(par2)
    
  }
 
  
   
function del(e){
  set_sum(1)
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




  const menu1 = ["Закуски","Салаты","Печь","Хлеб","Горячие Блюда","Гриль","Гарнир","Соус","Супы","Аквариум","Cладкое","напитки"]


return (
  <>
  <Header />
    <div className={"menu"}>
      <div className={menu1_display ? "menu-items": "menu-items none" }>
            {menu1.map(element=>(<button className="testb" onClick={displaySnake}>{element}</button>))}
            
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
            {Bake.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      <div className={sous_dispaly?"bake":"bake none"}>
            {sous.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      <div className={hotdish_dispaly?"bake":"bake none"}>
            {hotbluda.map(data=>(<button onClick={add}>{data.name}</button>))}
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
      <div className={aqua_dispaly?"bake":"bake none"}>
            {aqua.map(data=>(<button onClick={add}>{data.name}</button>))}
            <button onClick={back}>назад</button>
      </div>
      
      <Sweet add={add} back={back} display={sweets_dispaly} name={name1} />
      <Bar back={back} add={add} display={bar_display} name2={name2}/>
      </div>
      
      <div className="list">
     
     
      {list_snakes.length>0  && <h3>Закуски</h3>}
      {list_snakes.map(el=>(<div className="list-item" onClick={del}><span className='span'>{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_salad.length>0  && <h3>Салаты</h3>}
      {list_salad.map(el=>(<div className="list-item" onClick={del}><span className='span'>{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_hotdish.length>0  && <h3>Горичие блюда</h3>}
      {list_hotdish.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_soup.length>0  && <h3>Супы</h3>}
      {list_soup.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_onFire.length>0  && <h3>Гриль</h3>}
      {list_onFire.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_bake.length>0  && <h3>Печь</h3>}
      {list_bake.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_bread.length>0  && <h3>Хлеб</h3>}
      {list_bread.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_sweets.length>0  && <h3>Сладкое</h3>}
      {list_sweets.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_garnish.length>0  && <h3>Гарниры</h3>}
      {list_garnish.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_aqua.length>0  && <h3>Аквариум</h3>}
      {list_aqua.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      
      {list_sous.length>0  && <h3>Соус</h3>}
      {list_sous.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}

      {list_bar_alko.length>0  && <h3>Алкогольные напитки</h3>}
      {list_bar_alko.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_tin.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_coc.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}

      
      {(list_bar_l.length>0 || list_bar_dr.length>0 || list_bar_h.length>0 || list_bar.length>0 || list_bar_t.length>0 )&& <h3>Напитки</h3>}
      {list_bar.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_l.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_t.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_h.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}
      {list_bar_dr.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}





      {list_vine.length>0  && <h3>Вино</h3>}
      {list_vine.map(el=>(<div className="list-item" onClick={del}><span className='span' >{el.name}</span> <span className='span count'>{el.count}</span></div>))}

      {/* {sum>0 && <h3>сумма</h3>} */}
      {items.length>0 && <h3> Итого - {sum} р</h3>}
      {/* <button onClick={summa}>сумма</button> */}
      {items.length>0 && <button className='cop' onClick={copy}>Копировать</button>}
     </div>
    
      
      
     
    </>
  )
       }       