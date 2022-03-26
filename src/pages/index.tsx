import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = (props) => {
  return (
    <div className="inset-0 absolute">
      <Head>
        <title>~TODO~</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  )
}

export default Home
