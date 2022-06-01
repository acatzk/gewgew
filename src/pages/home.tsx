import React from 'react'
import { NextPage } from 'next'
import Layout from '~/layouts/Layout'
import HomeLayout from '~/layouts/HomeLayout'
import { authProtected } from '~/utils/auth-protected'

const Home: NextPage = () => {
  return (
    <Layout metaHead="Home">
      <HomeLayout>This is the home page showing</HomeLayout>
    </Layout>
  )
}

export default authProtected(Home)
