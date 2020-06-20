import {
  container,
  copyright,
  footer,
} from './layout.module.css'
import OverviewCard from './resume/card'

const Layout = ({ children }) =>
  <div className={container}>
    {children}
    <div className={footer}>
      <OverviewCard />
      <div className={copyright}>
        &#169; Copyright {new Date().getYear() + 1900} Milo Gertjejansen
      </div>
    </div>
  </div>

export default Layout
