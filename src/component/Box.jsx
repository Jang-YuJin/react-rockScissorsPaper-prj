import React from 'react'

const Box = (props) => {

  return (
    <div className='box-container'>
        <div className='title'>{props.title && props.title}</div>
        <img className='img-size' src={props.select === null ? '/img/who.png' : props.select.img} alt='question'></img>
        <div className='jugdge'>승리</div>
    </div>

  )
}

export default Box
