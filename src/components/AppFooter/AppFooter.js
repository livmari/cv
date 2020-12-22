import React from 'react'
import { Envelope, Question } from '../index'
import { Link } from '../TextContent/TextContent'

import './AppFooter.css'

function handleClick() {
  alert(
    'This website is a work in progress.\nPlease check back in later 🤓\n\nLast updated: 2020-12-22'
  )
}

// TODO: Handle click in renderPageLinks
const PageLinks = () => {
  const classes =
    ' text-app-orange font-semibold app-footer_btn'

  return (
    <div
      className={
        'app-footer_btn-container w-full mb-10 md:mb-0'
      }
    >
      <button
        onClick={handleClick}
        className={'mr-10 sm:mr-16' + classes}
      >
        <Envelope classes={'app-footer_btn-icon mb-2'} />
        Contact me
      </button>
      <button onClick={handleClick} className={classes}>
        <Question classes={'app-footer_btn-icon mb-2'} />
        FAQ
      </button>
    </div>
  )
}

const Info = () => {
  return (
    <ul
      className={
        'app-footer_info mb-5 md:mb-0 text-app-dark-grey md:text-right'
      }
    >
      <li className={'font-light'}>
        page author &emsp;
        <span className={'font-semibold'}>
          Liv Mari Alterskjaer
        </span>
      </li>
      <li>
        e-mail &emsp;
        <span className={'font-semibold'}>
          liv.alterskjaer@icloud.com
        </span>
      </li>
    </ul>
  )
}

const Copyright = () => {
  return (
    <div
      className={
        'text-app-dark-grey md:col-span-2 md:text-right'
      }
    >
      <p>
        <small>
          zen-dude illustration credit &thinsp;
          <Link
            href={'https://www.ls.graphics/illustrations'}
            text={'Lstore Graphics'}
          />
        </small>
      </p>
      <p>
        <small>
          &copy; {new Date().getFullYear()} Liv Mari
          Alterskjaer
        </small>
      </p>
    </div>
  )
}

const AppFooter = props => {
  return (
    <footer
      className={'app-footer bg-app-light-grey pt-14 pb-16'}
    >
      <div
        className={
          'grid grid-cols-1 md:grid-cols-2 md:gap-2' +
          props.classes
        }
      >
        <PageLinks />

        <Info />

        <Copyright />
      </div>
    </footer>
  )
}

export default AppFooter
