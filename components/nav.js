import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faChevronCircleDown,faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {
  arrowBump,
  dropdown,
  dropdownWrapper,
  hamburger,
  iconButton,
  leftNav,
  link,
  linkActive,
  linkHover,
  links,
  linksHolder,
  me,
  menu,
  menuButton,
  nav,
  navInner,
  rightNav,
  showingWrapper,
} from './nav.module.css'
import features from '../lib/features'

const leftTopButtons = [
  { name: 'Me', href: '/' },
  { name: 'Projects', href: '/projects' },
  features.resume ? { name: 'Resume', href: '/resume' } : {},
  { name: 'Game Tools', href: '/gametools' },
]

const rightBottomButtons = [
  { name: 'Github', href: 'https://github.com/milogert', icon: faGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/milogert', icon: faLinkedin },
]

const Nav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const router = useRouter()
  const { pathname } = router

  const isActiveButton = href => {
    return pathname === href
  }

  return <nav
    className={nav}
  >
    <div className={navInner}>
      <div className={me}>
        <Link href="/"><a><img src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200" /></a></Link>
      </div>

      <div className={`${linksHolder} hidden sm:flex`}>
        <div className={`${links} ${leftNav}`}>
          { leftTopButtons.filter(({ name }) => Boolean(name)).map(({ name, href }, idx) =>
            <Link key={idx} href={href}>
              <a className={`${link} ${linkHover} ${isActiveButton(href) ? linkActive : ''}`}>{ name }</a>
            </Link>
          )}
        </div>
        <div className={`${links} ${rightNav}`}>
          { rightBottomButtons.map(({ name, href, icon }, idx) =>
            <a key={idx} className={`${link} ${linkHover}`} href={href}>
              <FontAwesomeIcon className={iconButton} icon={icon} /> { name }
            </a>
          )}
        </div>
      </div>

      <div className={`${menu} flex sm:hidden`}>
        <button className={menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon className={hamburger} icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
    <div className={`${dropdownWrapper} ${menuOpen ? showingWrapper : null}`}>
      <div className={arrowBump} />

      <div className={dropdown}>
        { leftTopButtons.filter(({ name }) => Boolean(name)).map(({ name, href }, idx) =>
          <div key={idx} onClick={() => setMenuOpen(false)}>
            <Link href={href}>
              <a className={`${link} ${isActiveButton(href) ? 'active' : ''}`}>{ name }</a>
            </Link>
          </div>
        )}
        <hr />
        { rightBottomButtons.map(({ name, href, icon }, idx) =>
          <div key={idx} onClick={() => setMenuOpen(false)}>
            <a className={link} href={href}>
              <FontAwesomeIcon className={iconButton} icon={icon} /> { name }
            </a>
          </div>
        )}
      </div>
    </div>
  </nav>
}

export default Nav
