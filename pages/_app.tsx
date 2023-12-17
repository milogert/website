import 'styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import React from 'react'
import { Layout } from 'components/layout'
import { Nav } from 'components/nav'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <div className="flex">
        <div className="fixed z-10">
          <Nav />
        </div>
        <div className="hidden md:block w-64 flex-shrink-0 m-2" />
        <div className="mt-20 p-4 flex-grow-1">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  )
}

export default App
