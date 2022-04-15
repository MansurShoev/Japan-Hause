import React from 'react'
import "./figma.css"

function Figma(props) {
    const{img,text1,text2,text3} = props
  return (
    <div className='figma'>
        <div className="block">
            <img src={img} className="block__img"/>
            <p className='block__text1' >{text1}</p>
            <h1  className='block__text2'>{text2}</h1>
            <p  className='block__text3'>{text3}</p>
        </div>
    </div>
  )
}

export default Figma