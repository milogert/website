import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faTimes, faChevronCircleDown, faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import features from '../lib/features'

const leftTopButtons = [
  { name: 'Me', href: '/' },
  { name: 'Projects', href: '/projects' },
  features.resume ? { name: 'Resume', href: '/resume' } : {},
  { name: 'Game Tools', href: '/gametools' },
  { name: 'Miniatures', href: '/miniatures' },
]

const rightBottomButtons = [
  { name: 'Github', href: 'https://github.com/milogert', icon: faGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/milogert', icon: faLinkedin },
]

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalElement, setPortalElement] = useState(null)
  const router = useRouter()
  const { pathname } = router

  const isActiveButton = (href) => pathname === href

  useEffect(() => {
    if (!portalElement) {
      setPortalElement(document.getElementById('portal'))
    }
  })

  return (
    <nav className="bg-yellow-500 relative z-10 h-16">
      <div className="max-w-4xl h-full mx-auto flex items-center justify-start flex-wrap">
        <div className="h-12 w-12 mx-4">
          <Link href="/">
            <img
              className="object-cover w-full rounded-full"
              src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200"
              alt="avatar"
            />
          </Link>
        </div>

        <div className="justify-between items-center flex-grow h-full hidden sm:flex">
          <div className="flex items-center h-full">
            {leftTopButtons.filter(({ name }) => Boolean(name)).map(({ name, href }) => (
              <Link
                key={`${href} ${name}`}
                href={href}
                className={`flex items-center h-full px-4 hover:bg-yellow-300 ${isActiveButton(href) ? 'bg-yellow-400' : ''}`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center h-full">
            {rightBottomButtons.map(({ name, href, icon }) => (
              <a key={href} className="flex items-center h-full px-4 hover:bg-yellow-400 focus:outline-none" href={href}>
                <FontAwesomeIcon className="mr-1 w-4 inline-block" icon={icon} />
                {' '}
                {name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-grow justify-end items-center flex sm:hidden">
          <button type="button" className="h-10 w-10 rounded-full mr-4 flex justify-center items-center hover:bg-yellow-400 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon className="h-6 w-6" icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {portalElement && createPortal(
        <div className={`mt-20 flex-col -mb-2 float-right m-4 absolute right-0 top-0 rounded border-2 border-yellow-500 bg-white py-2 ${menuOpen ? 'flex opacity-100' : 'hidden opacity-0'}`}>
          <div className="border-l-2 border-t-2 border-yellow-500 h-3 w-3 transform rotate-45 absolute bg-white right-4 -top-2" />

          <div>
            {leftTopButtons.filter(({ name }) => Boolean(name)).map(({ name, href }, idx) => (
              <div key={idx} className="h-10 px-4 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                <Link
                  href={href}
                  className={`flex items-center h-full px-4 ${isActiveButton(href) ? 'active' : ''} h-10`}
                >
                  {name}
                </Link>
              </div>
            ))}
            <hr className="my-2" />
            {rightBottomButtons.map(({ name, href, icon }, idx) => (
              <div key={idx} className="h-10 px-4 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                <a className="flex items-center h-full px-4" href={href}>
                  <span className="mr-1 w-4 inline-block">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  {name}
                </a>
              </div>
            ))}
          </div>
        </div>, portalElement,
      )}
    </nav>
  )
}
