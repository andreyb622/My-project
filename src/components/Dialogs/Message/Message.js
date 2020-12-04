import React from 'react';
import style from './style.module.css'
 

const Message = (props) => {

  let text = props.text

  return (
    <div className={style.message}>{text}</div>
  )
}



export default Message