
import React from 'react'

 let AddToDoForm = (props) => {
     "use strict";
     let input;

     return(
         <div >
             <form className="input-group" onSubmit={e => {
             e.preventDefault()
             if(!input.value.trim()){
             return
             }
             props.onSubmit(input.value)
             input.value = ''
             }}>
             <input type="text" className="form-control" ref={node => {
             input=node
             }} />
                 <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                        Add To do
                    </button>
                 </span>
     </form>
         </div>
     )

 }
export default AddToDoForm