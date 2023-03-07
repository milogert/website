import { Hero } from 'components/hero'
import features from 'lib/features'
import { getSortedPostsData } from 'lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const qa = [
  {
    question: "What's with the yellow-ish theme?",
    answer: 'Nobody else plays as yellow.',
  },
]

const Home = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <div className="text-4xl">Hello</div>
        <div className="text-2xl">
          I'm <b>Milo Gertjejansen</b>, a software engineer currently living in
          Maine working at{' '}
          <a href="articulate.com" className="webLink">
            Articulate
          </a>
          .
        </div>
      </Hero>

      <div className="content">
        {features.resume ? (
          <p className="my-4">
            Here I{' '}
            <Link href="/projects" className="webLink">
              showcase some work I have done
            </Link>{' '}
            as well as host an{' '}
            <Link href="/resume" className="webLink cursor-not-allowed">
              online adaptation of my resume
            </Link>
            .
          </p>
        ) : (
          <p className="my-4">
            Here I{' '}
            <Link href="/projects" className="webLink">
              showcase some work I have done
            </Link>
            .
          </p>
        )}
        <p className="my-4">
          I work almost entirely with JavaScript, specifically React and Ramda.
          But I am a big fan of trying out other technologies. I also love
          experimenting with new tech.
        </p>
        <p className="my-4">
          Hobbies of mine include programming, board games, and painting
          miniatures.
        </p>
        <p className="my-4">
          Got any question? Find my contact info at the bottom of the page and
          I'll get back to you as soon as possible!
        </p>
        <div>
          <div className="text-2xl">Questions and Answers</div>
          {qa.map(({ question, answer }, idx) => (
            <div key={idx} className="">
              <div className="text-lg">{question}</div>
              <div className="text-base ml-4">{answer}</div>
            </div>
          ))}
        </div>
      </div>

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
    </>
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
