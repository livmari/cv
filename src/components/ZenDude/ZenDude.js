import React from 'react'
import ZenDudeImg from '../../assets/zen.png'
import { Shadow } from '../../components'

import './ZenDude.css'

const ZenDude = () => {
  return (
    <div className={'zen-container'}>
      <img
        src={ZenDudeImg}
        alt={'Zen dude floating in header'}
        className={'zen-dude'}
      />
      <Shadow classes={'zen-shadow'} />
    </div>
  )
}

export default ZenDude
