import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import "./tort.css"

export const Tort = () => {
    const [checked, setChecked] = useState(true);
    const keyboard = ["1","2","3","4","5","6","7","8","9","←","0","→"]
    const [board,setboard] = useState([])
    const [flip,setflip] = useState(true)
    const [num,setnum] = useState(0)
    //const [str,setstr] = useState("")
    
    function chengeCheckbox() {
        setChecked(!checked);
        console.log(checked)
     }

    function arr(arr){
        let str = ""
         arr.forEach(element => {
            str = str + element
         });
        //  new Intl.NumberFormat('ru-RU').format(Number(str))
         return str
    }


     function click(e) {
        const btn = e.target.textContent
        console.log(e.target.textContent)
        console.log(arr(board))
        setboard([...board,btn])

        
        if(btn==="←"){
            board.pop() 
            setboard([...board])
        }
        if(btn==="→"){
            setflip(false)
            setboard([...board])
            if (checked){
                setnum(arr(board))
                console.log("num - ",num)
            } else {
                setnum(arr(board)/100*93)
            }
        }
        

        


     }

    function back(){
        setflip(true)
        setboard([])
    }

    
  
    return (
    <>
    <div className="wrap-calc">
    <div className="drop">
        <h2 className="tr"><Link to="/kitchen" className="tr" >Торт Счастья</Link></h2>
        <label htmlFor="c1" className={checked?"chek":"chek yes"} >По Карте</label>
        <input type="checkbox" className="chek_input" id="c1" name="cart"onChange={chengeCheckbox}/>
    </div>
    <div className="panel">
        <h1 className='h'>{new Intl.NumberFormat('ru-RU').format(Number(arr(board)))} ₽ </h1>
    </div>
    <div className="keyboard">
        <div className="keyboard-wr">
            <div className={flip?"flip-card":"flip-card"}>
                <div className={flip?"inner":"inner hover-flip"}>
                    <div className="front">
                    {keyboard.map(data=>(
                        <button className='btn' onClick={click}>{data}</button>
                    ))}
                    </div>
                    <div className="back" onClick={back}>
                        <h3 className="h">Оффицанты - {Math.round(num/100*70)}</h3>
                        <h3 className="h">Кухня - {Math.round(num/100*10)}</h3>
                        <h3 className="h">Мойка - {Math.round(num/100*5)}</h3>
                        <h3 className="h">Бар - {Math.round(num/100*7.5)}</h3>
                        <h3 className="h">Менеджер - {Math.round(num/100*7.5)}</h3>
                        <h3 className="h">Общий - {Math.round(num)}</h3>
                    </div>

                </div>      
            </div>
           
            
           
        </div>
    </div>
    
    </div>
    
    </>
  )
}
