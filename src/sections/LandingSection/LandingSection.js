import React from 'react'
import {
  Title,
  Paragraph,
} from '../../components/TextContent/TextContent'

const paragraphs = [
  "My name is Liv Mari, and I'm a freelance developer based in Gothenburg, Sweden. I love meeting new people, and creating value in their daily lives by developing web based solutions that help solve their problems.",
]

const LandingSection = props => {
  return (
    <div className={'landing sm:mt-12' + props.classes}>
      <Title text={'Hello world'} />
      {paragraphs.map((p, index) => (
        <Paragraph key={index} text={p} />
      ))}
    </div>
  )
}

export default LandingSection
