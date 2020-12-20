import React from 'react'
import { AppFooter } from './components'
import {
  HeroSection,
  LandingSection,
  PortfolioSection,
} from './sections'

import './App.css'

const sectionClasses =
  ' container mx-auto px-5 sm:px-6 md:px-14 lg:px-20'

function App() {
  return (
    <div className='app'>
      <HeroSection />
      <LandingSection classes={sectionClasses} />
      <PortfolioSection classes={sectionClasses} />
      <AppFooter classes={sectionClasses} />
    </div>
  )
}

export default App
