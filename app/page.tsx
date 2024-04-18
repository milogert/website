import { Metadata } from 'next'
import React from 'react'
import { Home } from 'components/home-page'
import { getSortedPostsData } from 'lib/posts'

export const metadata: Metadata = {
  title: 'Home Page',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function() {
  const allPostsData = await getSortedPostsData()

  return <Home postData={allPostsData} />
}
