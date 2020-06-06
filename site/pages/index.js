import Head from 'next/head'
import Link from 'next/Link'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'

const Home = ({ allPostsData }) => {
  return <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={`py-4`}>
      <h2 className='text-2xl'>Blog</h2>
      <ul className='list-none'>
        {allPostsData.map(({ id, date, title }) => (
          <li className="px-4 mb-5 hover:bg-gray-300" key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
