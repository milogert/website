import React from 'react'
import DiagonalWrapper from './diagonalWrapper'

type HeroProps = {
  children?: JSX.Element | JSX.Element[] | string
  title?: string
}

export const Hero = ({ children, title }: HeroProps) =>
  <div className="-mt-28">
    <DiagonalWrapper style={{ color: 'white', backgroundColor: '#5B55F3' }}>
      {title && <div className="text-5xl">{title}</div>}
      {children}
    </DiagonalWrapper>
  </div>

export default Hero
