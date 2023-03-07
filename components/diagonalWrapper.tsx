import React from 'react'

type DiagonalWrapperProps = {
  children?: JSX.Element | JSX.Element[] | string
  style: React.CSSProperties
}

const DiagonalWrapper = ({
  children,
  style,
}: DiagonalWrapperProps) =>
  <div className="transform -skew-y-6 my-16" style={{ backgroundColor: 'linear-gradient(45deg, #FFC200, #FFEB00)', ...style }}>
    <div className="my-0 mx-auto transform skew-y-6 py-16 px-2 max-w-4xl">
      {children}
    </div>
  </div>

export default DiagonalWrapper
