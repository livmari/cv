import React from 'react'

const utilityClasses =
  ' antialiased sm:subpixel-antialiased md:antialiased'

export const Title = props => {
  return (
    <h1
      className={
        'text-app-orange text-6xl font-thin mb-4' +
        utilityClasses
      }
    >
      {props.text}
    </h1>
  )
}

export const Subtitle = props => {
  return (
    <h2
      className={
        'text-app-dark-grey text-4xl font-extralight mb-9' +
        utilityClasses
      }
    >
      {props.text}
    </h2>
  )
}

export const Paragraph = props => {
  return (
    <p
      className={
        'text-app-dark-grey font-light leading-7 mb-4' +
        utilityClasses
      }
    >
      {props.text}
    </p>
  )
}

export const Link = props => {
  return (
    <a
      href={props.href}
      className={'underline text-app-orange'}
    >
      {props.text}
    </a>
  )
}

export const SmallText = props => {
  return (
    <p>
      <small>{props.text}</small>
    </p>
  )
}
