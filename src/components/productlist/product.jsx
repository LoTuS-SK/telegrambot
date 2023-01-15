import React from 'react'
import { base , salad, Bake , hotbluda, soup , onFire, garnish, bread, Sweets , aqua , sous} from "../database/database"
import { useState } from 'react'
import "./product.css"
import { useEffect } from 'react'
import { useCallback } from 'react'
import { Sweet } from './sweet'




//

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
    if(dispaly === "Горячие Блюда"){
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
    if(dispaly === "Аквариум"){
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
    if(dispaly === "Соус"){
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
          
        }
       }
      }
        setlistaslad(arr)
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
    
}

  function name1(params) {
    console.log("hi2")
    set_sweets_display(params)
    
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




  const menu1 = ["Закуски","Салаты","Печь","Хлеб","Горячие Блюда","Гриль","Гарнир","Соус","Супы","Аквариум","Cладкое","напитки"]


return (
  <>
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

      
     </div>
    
      
      
     
    </>
  )
       }       