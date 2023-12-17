import React from 'react'
import { OverviewCard } from './resume/card'

export const Layout = ({ children }) => (
  <div className="text-base">
    {children}
    <div className="flex flex-col items-center">
      <OverviewCard />
      <div className="text-center text-secondary mt-5 pb-5">
        &#169; Copyright {new Date().getFullYear()} Milo Gertjejansen
      </div>
    </div>
  </div>
)
