import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown,faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {
  dropdown,
  iconButton,
  leftNav,
  link,
  links,
  linksHolder,
  me,
  menu,
  menuButton,
  nav,
  navInner,
  rightNav,
} from './nav.module.css'

const leftTopButtons = [
  { name: 'Me', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
]

const rightBottomButtons = [
  { name: 'Github', href: 'https://github.com/milogert', icon: faGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/milogert', icon: faLinkedin },
]

const Nav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  return <nav
    className={nav}
  >
    <div className={navInner}>
      <div className={me}>
        <img src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200" />
      </div>

      <div className={`${linksHolder} hidden sm:flex`}>
        <div className={`${links} ${leftNav}`}>
          { leftTopButtons.map(({ name, href }) =>
            <Link href={href}><a className={link}>{ name }</a></Link>
          )}
        </div>
        <div className={`${links} ${rightNav}`}>
          { rightBottomButtons.map(({ name, href, icon }) =>
            <a className={link} href={href}>
              <FontAwesomeIcon className={iconButton} icon={icon} /> { name }
            </a>
          )}
        </div>
      </div>

      <div className={`${menu} flex sm:hidden`}>
        <button className={menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon className={iconButton} icon={menuOpen ? faChevronCircleUp : faChevronCircleDown} />
        </button>
      </div>
    </div>
    <div className={`${dropdown} ${menuOpen ? 'flex' : 'hidden'}`}>
      { leftTopButtons.map(({ name, href }) =>
        <div><Link href={href}><a className={link}>{ name }</a></Link></div>
      )}
      <hr />
      { rightBottomButtons.map(({ name, href, icon }) =>
        <div>
          <a className={link} href={href}>
            <FontAwesomeIcon className={iconButton} icon={icon} /> { name }
          </a>
        </div>
      )}
    </div>
  </nav>
}

export default Nav
