import React from 'react';
import style from './style.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

  let path = '/dialogs/' + props.id

  return (
    <div className={style.dialogItem}>
      <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem