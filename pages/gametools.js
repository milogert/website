import Head from 'next/head'

import DiagonalWrapper from '../components/diagonalWrapper'
import Hero from '../components/hero'

const helpers = [
  {
    name: 'Frostgrave Tools',
    href: 'https://fgtools.milogert.com',
    description: 'Pre-game wizard sheet and spell card tool. Not intended to be used during a game! Generate your wizard sheet and print your spell cards.',
  },
  {
    name: 'For What Remains Squad Manager',
    href: 'https://basement.milogert.com',
    description: 'Squad manager for the game For What Remains designed by David Thompson.',
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
    description: 'Keep track of your ranger and companions through this application, for Ranger of Shadow Deep.',
    comingSoon: true,
  },
]

const tools = [
  {
    name: 'Board Game Geek Wishlist+Auction RSS Matcher',
    href: 'https://bggrss.milogert.com',
    description: 'What a mouthful. This tool grabs you BGG wishlist and compares it to any auctions that roll in on BGG. If it finds any matches it generates an RSS feed item for you and publishes it. Slap the url into your favorite RSS reader to view them.',
  },
  {
    name: 'r/boardgameexchange Post Helper',
    href: 'https://github.com/milogert/bggtrade2reddit',
    description: 'Run the script to ask BGG for your "For Trade" list. If you enter data in the right way, it will generate a nicely formatted table for Reddit, which you can post on r/boardgameexchange.',
    comingSoon: true,
  },
]

const Row = ({ name, href, description, comingSoon = false }) =>
  <div className={comingSoon ? "opacity-50" : ""}>
    <div className="text-lg">
      {comingSoon && <span className="rounded bg-gray-500 px-2 py-1 mx-1 text-sm">Coming Soon!</span>}
      {href
        ? <a href={href} className="webLink">{ name }</a>
        : name
      }
    </div>
    <div className="text-base ml-4">{ description }</div>
  </div>

const GameTools = ({}) => <>
  <Head>
    <title>Game Tools - Milo Gertjejansen</title>
  </Head>

  <div className="gametools-page">
    <Hero>
      <div className="text-5xl">Game Tools</div>
      <p>Here are links to various tools I have create surrounding board games. These include helper apps (mostly as fun side projects) as well as tools for Board Game Geek.</p>
    </Hero>

      <DiagonalWrapper
        background={{ backgroundColor: 'white' }}
      >
        <div className="content">
          <div className="text-3xl">Helper Apps</div>
          { helpers.map((item, idx) => <Row key={idx} {...item} />) }
        </div>
      </DiagonalWrapper>

      <DiagonalWrapper
        background={{ backgroundImage: 'linear-gradient(45deg, #FFC200, #FFEB00)' }}
      >
        <div className="content">
          <div className="text-3xl">Board Game Geek Apps</div>
          { tools.map((item, idx) => <Row key={idx} {...item} />) }
        </div>
      </DiagonalWrapper>
  </div>
</>

export async function getStaticProps() {
  return { props: {} }
}

export default GameTools
