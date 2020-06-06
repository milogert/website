import '../styles/index.css'
import Layout from '../components/layout'
import Nav from '../components/nav'

const App = ({ Component, pageProps }) => {
  return <Layout>
    <Nav />
    <Component {...pageProps} />
  </Layout>
}

export default App
