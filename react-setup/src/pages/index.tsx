import Head from 'next/head'
import React from 'react'

import Logo from "../assets/React-icon.svg"
import { Containter } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Containter>
      <Head>
        <title>Homepage</title>
      </Head>
        <Logo/>
        <h1>ReactJs Structure</h1>
    </Containter>
  )
}
export default Home
