import { Metadata } from 'next'
import React from 'react'
import { Sections } from 'components/resume/sections'

export const metadata: Metadata = {
  title: 'Resume - Milo Gertjejansen',
}

const Resume = () => (
  <div>
    <div className="max-w-3xl mx-auto mt-4">
      <Sections />
    </div>
  </div>
)

export default Resume
