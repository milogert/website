const defaultBackground = 
  { backgroundImage: 'linear-gradient(45deg, #FFC200, #FFEB00)' }

const DiagonalWrapper = ({
  background = defaultBackground,
  children,
}) =>
  <div className="transform -skew-y-6 my-16" style={background}>
    <div className="my-0 mx-auto transform skew-y-6 py-16 px-2 max-w-3xl">
      { children }
    </div>
  </div>

export default DiagonalWrapper
