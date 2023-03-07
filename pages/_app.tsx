import '../styles/index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Layout } from '../components/layout'
import { Nav } from '../components/nav'

const App = ({ Component, pageProps }) => {
  return <Layout>
    <Nav />
    <Component {...pageProps} />
  </Layout>
}

export default App
