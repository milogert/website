import 'styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import React from 'react'
import { Layout } from 'components/layout'
import { Nav } from 'components/nav'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="fixed z-10">
          <Nav />
        </div>
        <div className="hidden md:block" />
        <div className="mt-20 col-span-4 md:col-span-3 p-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  )
}

export default App
