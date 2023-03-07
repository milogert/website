import OverviewCard from './resume/card'

const Layout = ({ children }) =>
  <div className="text-base">
    {children}
    <div className="flex flex-col items-center">
      <OverviewCard />
      <div className="text-center text-gray-500 mt-5 pb-5">
        &#169; Copyright {new Date().getYear() + 1900} Milo Gertjejansen
      </div>
    </div>
  </div>

export default Layout
