import React from 'react'
import { NextPage } from 'next'
import { authProtected } from '~/utils/auth-protected'
import { nhost } from '~/lib/nhost-client'
import Layout from '~/layouts/Layout'

const Home: NextPage = () => {
  const logout = async () => await nhost.auth.signOut()

  return (
    <Layout metaHead="Home">
      This is Home Page{' '}
      <button
        type="button"
        onClick={logout}
        className="py-2 px-3 bg-indigo-600 text-white"
      >
        Logout here
      </button>
    </Layout>
  )
}

export default authProtected(Home)
