import React from 'react'
import {
  Paragraph,
  Subtitle,
  Title,
} from '../../components/TextContent/TextContent'

const PortfolioSection = props => {
  return (
    <div
      className={
        'portfolio mt-20 mb-24 sm:mt-32 sm:mb-36' +
        props.classes
      }
    >
      <Title text={'Portfolio'} />
      <Subtitle text={'Web'} />
      <Paragraph text={'Coming soon'} />
      <Subtitle text={'Android'} />
      <Paragraph text={'Coming soon'} />
      <Subtitle text={'Desktop'} />
      <Paragraph text={'Coming soon'} />
    </div>
  )
}

export default PortfolioSection
