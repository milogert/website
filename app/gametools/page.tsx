import { Metadata } from 'next'
import React from 'react'

const helpers = [
  {
    name: 'Frostgrave Tools',
    href: 'https://fgtools.milogert.com',
    description:
      'Pre-game wizard sheet and spell card tool. Not intended to be used during a game! Generate your wizard sheet and print your spell cards.',
  },
  {
    name: 'For What Remains Squad Manager',
    href: 'https://basement.milogert.com',
    description:
      'Squad manager for the game For What Remains designed by David Thompson.',
  },
  {
    name: 'Gasland Offline Manager',
    href: 'https://milogert.github.io/glom',
    // TODO update to glom.milogert.com
    description: 'Manage your Gaslands squad with this application.',
  },
  {
    name: 'Alladore',
    href: 'https://alladore.milogert.com',
    description:
      'Keep track of your ranger and companions through this application, for Ranger of Shadow Deep.',
    comingSoon: true,
  },
]

const tools = [
  {
    name: 'Board Game Geek Wishlist+Auction RSS Matcher',
    href: 'https://bggrss.milogert.com',
    description:
      'What a mouthful. This tool grabs you BGG wishlist and compares it to any auctions that roll in on BGG. If it finds any matches it generates an RSS feed item for you and publishes it. Slap the url into your favorite RSS reader to view them.',
  },
  {
    name: 'r/boardgameexchange Post Helper',
    href: 'https://github.com/milogert/bggtrade2reddit',
    description:
      'Run the script to ask BGG for your "For Trade" list. If you enter data in the right way, it will generate a nicely formatted table for Reddit, which you can post on r/boardgameexchange.',
    comingSoon: true,
  },
]

const Row = ({ name, href, description, comingSoon = false }) => (
  <div className={comingSoon ? 'opacity-50' : ''}>
    <h3 className="text-lg">
      {comingSoon && (
        <span className="rounded bg-secondary px-2 py-1 mx-1 text-sm">
          Coming Soon!
        </span>
      )}
      {href ? (
        <a href={href} className="text-link">
          {name}
        </a>
      ) : (
        name
      )}
    </h3>
    <div className="text-base ml-4">{description}</div>
  </div>
)

export const metadata: Metadata = {
  title: 'Game Tools - Milo Gertjejansen',
}

const GameTools = () => (
  <div className="flex flex-col gap-8">
    <h1 className="text-5xl">Game Tools</h1>
    <p>
      Here are links to various tools I have create surrounding board games.
      These include helper apps (mostly as fun side projects) as well as tools
      for Board Game Geek.
    </p>

    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">Helper Apps</h2>
      {helpers.map((item, idx) => (
        <Row key={idx} {...item} />
      ))}
    </div>

    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">Board Game Geek Apps</h2>
      {tools.map((item, idx) => (
        <Row key={idx} {...item} />
      ))}
    </div>
  </div>
)

export default GameTools
