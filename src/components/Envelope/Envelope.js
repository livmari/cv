import React from 'react'

const Envelope = props => {
  return (
    <svg
      width={'54'}
      height={'45'}
      viewBox={'0 0 54 45'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      className={props.classes}
    >
      <path
        d={
          'M1 7V36.5M1 7H53M1 7L21.5 21.9808M1 36.5H53M1 36.5L21.5 21.9808M53 36.5V7M53 36.5L32.5 21.9808M53 7L32.5 21.9808M32.5 21.9808L27 26L21.5 21.9808'
        }
        stroke={'black'}
        strokeWidth={'0.6'}
      />
    </svg>
  )
}

export default Envelope
