
import React from 'react'

 let AddToDoForm = (props) => {
     "use strict";
     let input;

     return(
         <div>
             <form onSubmit={e => {
             e.preventDefault()
             if(!input.value.trim()){
             return
             }
             props.onSubmit(input.value)
             input.value = ''
             }}>
             <input ref={node => {
             input=node
             }} />
         <button type="submit">
             Add To do
             </button>
     </form>
         </div>
     )

 }
export default AddToDoForm