import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { features } from 'lib/features'
import { getSortedPostsData } from 'lib/posts'

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-5xl">Hello</div>
      <div className="text-3xl">
        I&apos;m <b>Milo Gertjejansen</b>, a software engineer currently
        living in Minnesota working at{' '}
        <a href="https://articulate.com" className="text-link">
          Articulate
        </a>
        .
      </div>

      {features.resume ? (
        <p>
          Here I{' '}
          <Link href="/projects" className="text-link">
            showcase some work I have done
          </Link>{' '}
          as well as host an{' '}
          <Link href="/resume" className="text-link cursor-not-allowed">
            online adaptation of my resume
          </Link>
          .
        </p>
      ) : (
        <p>
          Here I{' '}
          <Link href="/projects" className="text-link">
            showcase some work I have done
          </Link>
          .
        </p>
      )}

      <p>
        I work almost entirely with JavaScript, specifically React and Ramda.
        But I am a big fan of trying out other technologies. I also love
        experimenting with new tech.
      </p>

      <p>
        Hobbies of mine include <Link className="text-link" href="/projects">programming</Link>, board games, and <Link className="text-link" href="/miniatures">painting
        miniatures</Link>.
      </p>

      <p>
        Got any question? Find my contact info at the bottom of the page and
        I&apos;ll get back to you as soon as possible!
      </p>

      {/*<section className={`py-4`}>
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
    */}
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
