import React from 'react';
import style from './style.module.css'




const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img src='https://bipbap.ru/wp-content/uploads/2017/04/3-11.jpg' />
      </div>
      <div className={style.description_block}>
        ava + description
      </div>
    </div>

  )
}

export default ProfileInfo