import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import { createPortal } from 'react-dom'
import Toggle from 'react-toggle'
// import "react-toggle/style.css"
// import './toggle.module.css'
import classnames from 'classnames'
import * as rawData from 'data/project.json'
const data = Array.from(rawData)

import { useMedia } from 'react-use'
import { features } from 'lib/features'

const leftTopButtons = [
  { name: 'Me', href: '/' },
  { name: 'Projects', href: '/projects' },
  features.resume ? { name: 'Resume', href: '/resume' } : {},
  { name: 'Game Tools', href: '/gametools' },
  { name: 'Miniatures', href: '/miniatures' },
]

const rightBottomButtons = [
  { name: 'Github', href: 'https://github.com/milogert', icon: faGithub },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/milogert',
    icon: faLinkedin,
  },
]

type TreeNode = {
  name: string
  href: string
  nodes?: TreeNode[]
}

const tree: TreeNode = {
  name: 'Me',
  href: '/',
  nodes: [
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Game Tools',
      href: '/gametools',
    },
    {
      name: 'Miniatures',
      href: '/miniatures',
      nodes: data.map((project: ProjectContent) => ({
        name: project.title,
        href: `/miniatures/${project.id}`,
      })),
    },
  ],
}

const themes = [
  'srcery',
  'srceryLight',
  'gruvbox',
  'gruvboxLight',
  'dracula',
]

const Tree = (props: TreeNode & {depth: number, closeMenu: () => void}) => {
  const router = useRouter()
  const { asPath } = router
  const { name, href, nodes, depth, closeMenu } = props
  const isActiveButton = asPath === href

  const linkClassName = classnames("transition-colors w-full rounded hover:bg-hover p-1", {
    'bg-active': isActiveButton,
  })

  return <div style={{
    marginLeft: `${depth / 2}rem`,
  }}>
    <Link href={href} onClick={closeMenu} className={linkClassName}>{name}</Link>
    {nodes && nodes.map(node => <Tree key={node.name} {...node} depth={depth + 1} closeMenu={closeMenu} />)}
  </div>
}

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const systemMedium = useMedia('(min-width: 768px)', false)
  const [selectedTheme, setSelectedTheme] = useState('srcery')

  useEffect(() => {
    const lsThemeToggle = window.localStorage.getItem('theme')
    doSetTheme(lsThemeToggle !== null ? lsThemeToggle : 'srcery')
  })

  const doSetTheme = useCallback((theme: string) => {
    const html = document.getElementsByTagName('html')[0]
    html.setAttribute('data-theme', theme)
    if (window) {
      window.localStorage.setItem('theme', theme)
    }
    setSelectedTheme(theme)
  }, [])

  const onThemeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    doSetTheme(value)
  }, [doSetTheme])

  const navClassName = classnames(
    'bg-nav text-brand m-2 rounded',
    'transition-all',
    {
      'p-1': !systemMedium && !menuOpen,
      'p-3': systemMedium || menuOpen
    }
  )

  return (
    <nav className={navClassName}>
      <button type="button" className="h-12 w-12 flex" onClick={systemMedium ? undefined : () => setMenuOpen(!menuOpen)}>
        <img
          className="object-cover w-full rounded-full"
          src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200"
          alt="avatar"
        />
      </button>

      {(systemMedium || menuOpen) && <div className="mt-2">
        <Tree {...tree} depth={0} closeMenu={() => setMenuOpen(false)} />

        <hr className="border-brand my-4" />

        <div className="flex flex-col gap-2">
          <label htmlFor="theme-select" className="font-bold">Theme</label>
          <select className="bg-brand text-primary" id="theme-select" onChange={onThemeChange}>
            {themes.map(theme =>
              <option key={theme} value={theme} selected={theme === selectedTheme}>{theme}</option>
            )}
          </select>
        </div>
      </div>}
    </nav>
  )
}
