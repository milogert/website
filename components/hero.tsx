import React, { ReactNode } from 'react'
import { DiagonalWrapper } from './diagonal-wrapper'

type HeroProps = {
  children?: ReactNode
  title?: string
}

export const Hero = ({ children, title }: HeroProps) => (
  <div className="-mt-28">
    <DiagonalWrapper
      gradientFrom="from-[#5B55F3]"
      gradientTo="to-[#5B55F3]"
      style={{ color: 'white' }}
    >
      {title && <div className="text-5xl">{title}</div>}
      {children}
    </DiagonalWrapper>
  </div>
)
