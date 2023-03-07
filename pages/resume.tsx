import { Sections } from 'components/resume/sections'
import Head from 'next/head'
import React from 'react'

const Resume = () => (
  <div>
    <Head>
      <title>Resume - Milo Gertjejansen</title>
    </Head>
    <div className="max-w-3xl mx-auto mt-4">
      <Sections />
    </div>
  </div>
)

export default Resume
