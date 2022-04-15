import React from 'react'
import "./figma2.css"
function Figma2(props) {
    const{img,text1,text2,text3} = props                                                                    
  return (
    <div className='figma2'>
        <div className="block2">
            <img src={img} className="block__img2"/>
            <p className='block__text12' >{text1}</p>
            <h1  className='block__text22'>{text2}</h1>
            <p  className='block__text32'>{text3}</p>
        </div>
    </div>
  )
}

export default Figma2