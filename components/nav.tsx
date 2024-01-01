import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCode,
  faDice,
  faEnvelope,
  faFile,
  faMobileScreenButton,
  faPaintbrush,
  faRobot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import { useMedia } from 'react-use'
import * as rawData from 'data/project.json'
const data = Array.from(rawData)

import { features } from 'lib/features'

type TreeNode = {
  name: string
  href: string
  nodes?: TreeNode[]
  external?: boolean
  icon?: IconProp
}

const tree: TreeNode = {
  name: 'Me',
  href: '/',
  icon: faRobot,
  nodes: [
    {
      name: 'Apps',
      href: '/apps',
      icon: faMobileScreenButton,
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: faCode,
    },
    {
      name: 'Game Tools',
      href: '/gametools',
      icon: faDice,
    },
    ...(features.resume
      ? [
        {
          name: 'Resume',
          href: '/resume',
          icon: faFile,
        },
      ]
      : []),
    {
      name: 'Miniatures',
      href: '/miniatures',
      icon: faPaintbrush,
      nodes: data.map((project: ProjectContent) => ({
        name: project.title,
        href: `/miniatures/${project.id}`,
      })),
    },
    {
      name: 'Github',
      href: 'https://github.com/milogert',
      external: true,
      icon: faGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/milogert',
      external: true,
      icon: faLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:milo+site-contact@milogert.com;',
      external: true,
      icon: faEnvelope,
    },
  ],
}

enum Theme {
  srcery = 'srcery',
  srceryLight = 'srceryLight',
  gruvbox = 'gruvbox',
  gruvboxLight = 'gruvboxLight',
  dracula = 'dracula',
}

type TreeProps = TreeNode & { depth: number; closeMenu: () => void }

const Tree = (props: TreeProps) => {
  const router = useRouter()
  const { asPath } = router
  const { name, href, nodes, depth, closeMenu, external, icon } = props
  const isActiveButton = asPath === href

  const linkClassName = classnames(
    'transition-colors w-full rounded hover:bg-hover px-1 flex gap-2 items-center',
    {
      'bg-active': isActiveButton,
    },
  )

  return (
    <div
      style={{
        marginLeft: `${depth / 2}rem`,
      }}
      className="flex flex-col gap-1"
    >
      <Link
        href={href}
        onClick={closeMenu}
        className={linkClassName}
        target={external ? '_blank' : '_self'}
      >
        {icon && <FontAwesomeIcon className="w-4" icon={icon} />}
        {name}
        {external && (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        )}
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
  const [selectedTheme, setSelectedTheme] = useState(Theme.srcery)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lsThemeToggle = window.localStorage.getItem('theme') as Theme
    doSetTheme(lsThemeToggle !== null ? lsThemeToggle : Theme.srcery)
  })

  const doSetTheme = useCallback((theme: Theme) => {
    const html = document.getElementsByTagName('html')[0]
    html.setAttribute('data-theme', theme)
    if (window) {
      window.localStorage.setItem('theme', theme)
    }
    setSelectedTheme(theme)
  }, [])

  const onThemeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as Theme
      doSetTheme(value)
    },
    [doSetTheme],
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const navClassName = classnames(
    'bg-nav text-brand m-2 rounded duration-400',
    'transition-all',
    {
      'p-1': !systemMedium && !menuOpen,
      'p-3 w-64': systemMedium || menuOpen,
      'opacity-0': !loaded,
      'opacity-100': loaded,
    },
  )

  return (
    <nav className={navClassName}>
      <button
        type="button"
        className={`h-12 w-12 flex ${systemMedium ? 'cursor-default' : ''}`}
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
              className="bg-brand text-primary rounded"
              id="theme-select"
              onChange={onThemeChange}
            >
              {Object.keys(Theme).map((theme: Theme) => (
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
