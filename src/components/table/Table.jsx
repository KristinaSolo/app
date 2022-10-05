import React from 'react'
import './table.scss'
import Wordstable from '../table/Wordstable'
import { words } from '../data/table.js'
import Cards from '../cards/Cards'



export default function Table() {
  return (
    <>
    <div className='table'>
    <div className='table__nav'>
        <p>#</p>
        <p>English</p>
        <p>Transcription</p>
        <p>Russian</p>
        <p>#</p>
    </div>   
    {
      words.map((word) =>
        <Wordstable number={word.number} english={word.english} transcription={word.transcription} russian={word.russian} />
      )
    }
    </div>
    <div className='table__cards'>
    {
      words.map((word)=>
      <Cards english={word.english} transcription={word.transcription} russian={word.russian} />)
    }
    </div>
 
    </>
  )
}
