import React from 'react'
import delite from '../assest/img/del.png'
import edit from '../assest/img/edit.png'
import './buttonwordstable.scss'
import ButtonOk from './ButtonOk'

export default function ButtonWordstable() {
  function clickIcon(){
console.log('нажата');
        };
  return (

    <div className='btn'>
    <img className='btn__edit icon' onClick={clickIcon} src={edit} alt='edit'/>
    {/* <ButtonOk/>  */}
    <img className='btn__delite icon' src={delite} alt='delite'/>
    </div>
  )
}

