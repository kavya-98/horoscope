import React from 'react';
import './App.css';

export default function(props) {
  return (
    <div>
    <div id="diva">
    <h1>Horoscope Details</h1>
        <article className='card'>
      
        
        
        <label>Name of User</label>
        <p>{props.name}</p>
        
        
        <label>Horoscope date</label>
        <p>{props.current_date}</p>
        
        <label>Horoscope Description</label>
        <p>{props.description}</p>
      
        <label>Horoscope Sign</label>
        <p>{props.sign}</p>
        
      
     
    </article>
    </div>
    </div>
  )
}

