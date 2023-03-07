import React, { ReactNode } from 'react'

type DiagonalWrapperProps = {
  children?: ReactNode
  style?: React.CSSProperties
  gradientFrom?: string
  gradientTo?: string
}

export const DiagonalWrapper = ({
  children,
  style,
  gradientFrom = 'from-yellow-500',
  gradientTo = 'to-yellow-300',
}: DiagonalWrapperProps) => (
  <div
    className={`transform -skew-y-6 my-16 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    style={style}
  >
    <div className="my-0 mx-auto transform skew-y-6 py-16 px-2 max-w-4xl">
      {children}
    </div>
  </div>
)
