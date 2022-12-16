import DiagonalWrapper from './diagonalWrapper'

const Hero = ({ children }) =>
  <div className="-mt-28">
    <DiagonalWrapper background={{ color: 'white', backgroundColor: '#5B55F3' }}>
      {children}
    </DiagonalWrapper>
  </div>

export default Hero
