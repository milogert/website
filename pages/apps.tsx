import Head from 'next/head'
import React from 'react'

type AppType = {
  name: string
  href: string
  icon?: string
  description: string
}

const apps: AppType[] = [
  {
    name: 'TinyTinyClient',
    href: 'https://apps.apple.com/app/id6451119517',
    icon: 'https://apps.milogert.com/static/app-icon-d68a3fd3c7a2f3b54789dbd6bf77cf79.png',
    description: 'A TinyTinyRSS iOS client. Written in react-native ',
  },
  {
    name: 'Rollist',
    href: 'https://rollist.xyz',
    description: 'A rolling release wishlist manager.',
  },
]

const Row = ({ name, href, icon, description }: AppType) => (
  <div className="flex flex-col md:flex-row gap-4">
    {icon ? (
      <img
        className="rounded-lg h-20 w-20 object-cover self-center md:self-start shadow-lg shadow-primary"
        src={icon}
      />
    ) : (
      <div className={`h-20 w-20 self-center md:self-start ${!icon ? 'hidden md:block' : ''}`} />
    )}

    <div className="flex flex-col gap-2 grow">
      <div className="text-lg">
        {href ? (
          <a href={href} className="text-link">
            {name}
          </a>
        ) : (
          name
        )}
      </div>

      <div className="text-base">{description}</div>
    </div>
  </div>
)

const Apps = () => (
  <>
    <Head>
      <title>Apps - Milo Gertjejansen</title>
    </Head>

    <div className="flex flex-col gap-8">
      <div className="text-5xl">Apps</div>
      <p>These are some apps I have created and released in my free time.</p>

      <div className="flex flex-col gap-8">
        <div className="text-3xl">Helper Apps</div>
        {apps.map((item, idx) => (
          <Row key={idx} {...item} />
        ))}
      </div>
    </div>
  </>
)

export async function getStaticProps() {
  return { props: {} }
}

export default Apps
