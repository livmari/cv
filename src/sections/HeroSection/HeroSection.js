import React from 'react'

import './HeroSection.css'
import { ZenDude } from '../../components'

const HeroSection = () => {
  return (
    <div className={'hero container mx-auto mb-8 md:mb-12'}>
      <ZenDude />
    </div>
  )
}

export default HeroSection
