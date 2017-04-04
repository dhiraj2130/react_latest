/**
 * Created by dhiraj.kumar on 4/04/2017.
 */
import React from 'react'

 let AddToDoForm = ({onSubmit}) => {
     "use strict";
     let input

     return(
         <div>
             <form onSubmit={e => {
             e.preventDefault()
             if(!input.value.trim()){
             return
             }
             onSubmit(input.value)
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