import React from 'react';
import { arr } from './consts'
// import { div } from './Task.module.css'
import './index.css'

function Task() {

 
  return (
    <div className='wrapper'>
      {
        arr.map( (el, index) => (
          <div key={el.id} className='div'
               onClick={ () => alert(`Div number is ${index}. Name is: ${el.name}`)}
          >
          </div>
        ))
      }
    </div>
  );
}

export default Task;
