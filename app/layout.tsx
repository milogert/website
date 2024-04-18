import 'styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import React from 'react'

import { Nav } from 'components/nav'

// Copied from https://stackoverflow.com/a/59429852
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

const Layout = ({ children }) => {
  return (
    <html data-theme="srcery" className="font-mono">
      <body className="bg-brand text-primary transition-colors">
        <div className="text-base">
          <div className="flex">
            <div className="fixed z-10">
              <Nav />
            </div>
            <div className="hidden md:block w-64 shrink-0 m-2" />
            <div className="mt-14 p-4 grow">
              {children}
            </div>
          </div>
        <div className="flex flex-col items-center">
          <div className="text-center text-secondary mt-5 pb-5">
            &#169; {new Date().getFullYear()} Milo Gertjejansen
          </div>
        </div>
      </div>
        </body>
    </html>
  )
}

export default Layout
