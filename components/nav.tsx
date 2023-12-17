import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import { useMedia } from 'react-use'
import * as rawData from 'data/project.json'
const data = Array.from(rawData)

import { features } from 'lib/features'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

type TreeNode = {
  name: string
  href: string
  nodes?: TreeNode[]
  external?: boolean
}

const tree: TreeNode = {
  name: 'Me',
  href: '/',
  nodes: [
    {
      name: 'Apps',
      href: '/apps',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Game Tools',
      href: '/gametools',
    },
    ...(features.resume ? [{
      name: 'Resume',
      href: '/resume',
    }] : []),
    {
      name: 'Miniatures',
      href: '/miniatures',
      nodes: data.map((project: ProjectContent) => ({
        name: project.title,
        href: `/miniatures/${project.id}`,
      })),
    },
    {
      name: 'Github',
      href: 'https://github.com/milogert',
      external: true,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/milogert',
      external: true,
    },
  ],
}

const themes = ['srcery', 'srceryLight', 'gruvbox', 'gruvboxLight', 'dracula']

const Tree = (props: TreeNode & { depth: number; closeMenu: () => void }) => {
  const router = useRouter()
  const { asPath } = router
  const { name, href, nodes, depth, closeMenu, external } = props
  const isActiveButton = asPath === href

  const linkClassName = classnames(
    'transition-colors w-full rounded hover:bg-hover p-1',
    {
      'bg-active': isActiveButton,
    },
  )

  return (
    <div
      style={{
        marginLeft: `${depth / 2}rem`,
      }}
    >
      <Link href={href} onClick={closeMenu} className={linkClassName} target={external ? '_blank' : '_self'}>
        {name}
        {external && <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} /> }
      </Link>
      {nodes &&
        nodes.map((node) => (
          <Tree
            key={node.name}
            {...node}
            depth={depth + 1}
            closeMenu={closeMenu}
          />
        ))}
    </div>
  )
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

  const onThemeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      doSetTheme(value)
    },
    [doSetTheme],
  )

  const navClassName = classnames(
    'bg-nav text-brand m-2 rounded',
    'transition-all',
    {
      'p-1': !systemMedium && !menuOpen,
      'p-3': systemMedium || menuOpen,
    },
  )

  return (
    <nav className={navClassName}>
      <button
        type="button"
        className="h-12 w-12 flex"
        onClick={systemMedium ? undefined : () => setMenuOpen(!menuOpen)}
      >
        <img
          className="object-cover w-full rounded-full"
          src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200"
          alt="avatar"
        />
      </button>

      {(systemMedium || menuOpen) && (
        <div className="mt-2">
          <Tree {...tree} depth={0} closeMenu={() => setMenuOpen(false)} />

          <hr className="border-brand my-4" />

          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select" className="font-bold">
              Theme
            </label>
            <select
              className="bg-brand text-primary"
              id="theme-select"
              onChange={onThemeChange}
            >
              {themes.map((theme) => (
                <option
                  key={theme}
                  value={theme}
                  selected={theme === selectedTheme}
                >
                  {theme}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  )
}
