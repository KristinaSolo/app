import React from 'react'
import ButtonWordstable from '../button/ButtonWordstable'
import './wordstable.scss'


export default function Wordstable(props) {
  return (
    <div className='table__words'>
    <p className='table__number'>{props.number}</p>
    <input className='table__english tables' type="text" placeholder={props.english} disabled/>
    <input className='table__transcription tables' type="text" placeholder={props.transcription} disabled />
    <input className='table__russian tables' type="text" placeholder={props.russian} disabled/>
     <div className='table__btn'>
  <ButtonWordstable/>
    </div>
    </div>
  )
}
