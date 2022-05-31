import React from 'react'
import { NextPage } from 'next'
import { authProtected } from '~/utils/auth-protected'

const Home: NextPage = () => {
  return <div>This is Home Page</div>
}

export default authProtected(Home)
