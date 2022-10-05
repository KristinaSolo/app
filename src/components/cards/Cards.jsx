import React, { useState } from 'react'
import './cards.scss'




export default function Cards(props) {

  const [pressed, setPressed] = useState(false);
  const Click= () =>{
    setPressed(!pressed);
  }
  
  return (
    <div className='cards'>
    <div className='cards__english'>{props.english}</div>
    <div className='cards__transcription'>{props.transcription}</div>
    <button className='cards__button' onClick={Click}>{pressed ? props.russian : "Проверить" }</button>
    </div>
 
  )
}
