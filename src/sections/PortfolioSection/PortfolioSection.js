import React from 'react'
import { Title } from '../../components/TextContent/TextContent'

const PortfolioSection = props => {
  return (
    <div
      className={
        'portfolio mt-20 mb-24 sm:mt-32 sm:mb-36' +
        props.classes
      }
    >
      <Title text={'Portfolio'} />
    </div>
  )
}

export default PortfolioSection
