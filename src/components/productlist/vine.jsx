import React from 'react'
import { vine } from "../database/basevine"

export const Vine = () => {
  
    
    
    return (
   <div className="warp">
        <vine className="menu">
            {
                vine.map(el=><button>{el.name}</button>)
            }
        </vine>
   </div>
  )
}