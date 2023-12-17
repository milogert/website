import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html data-theme="srcery" className="font-mono">
        <Head />
        <body className="bg-brand text-primary">
          <Main />
          <NextScript />
        </body>
        <div id="portal" />
      </Html>
    )
  }
}

export default MyDocument
