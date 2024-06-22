import Link from 'next/link'
import React from 'react'
import { features } from 'lib/features'

export const Home = ({ postData }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl">Hello</h1>
      <div className="text-3xl">
        I&apos;m <b>Milo Gertjejansen</b>, a software engineer currently living
        in Maine working at{' '}
        <a
          href="https://swoogo.events"
          target="_blank"
          rel="noreferrer"
          className="from-[rgb(114_107_234)] to-[#f46a34] bg-gradient-to-br bg-clip-text text-transparent underline font-bold"
        >
          Swoogo
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
          . I&apos;ve also published some &quot;finished&quot; apps which you
          can listed find{' '}
          <Link href="/apps" className="text-link">
            here
          </Link>
          .
        </p>
      ) : (
        <p>
          Here I{' '}
          <Link href="/projects" className="text-link">
            showcase some work I have done
          </Link>
          . I&apos;ve also published some &quot;finished&quot; apps which you
          can listed find{' '}
          <Link href="/apps" className="text-link">
            here
          </Link>
          .
        </p>
      )}

      <p>
        I work primarily in Javascript and Typescript but I am also a big fan of
        Elixir and I have written a few apps with that. Functional programming
        is something that I am interested in and try to practice, but I still
        have lots to learn.
      </p>

      <p>
        Hobbies of mine include{' '}
        <Link className="text-link" href="/projects">
          programming
        </Link>
        , board games, and{' '}
        <Link className="text-link" href="/miniatures">
          painting miniatures
        </Link>
        .
      </p>

      <p>
        Got any question? Find my contact info in the sidebar. I&apos;ll get
        back to you as soon as possible!
      </p>

      {/*<section className={`py-4`}>
      <h2 className='text-2xl'>Blog</h2>
      <ul className='list-none'>
        {postData.map(({ id, date, title }) => (
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
