import React from 'react'
import { NextPage } from 'next'
import Layout from '~/layouts/Layout'
import HomeLayout from '~/layouts/HomeLayout'
import { authProtected } from '~/utils/auth-protected'
import { classNames } from '~/utils/classNames'

const Home: NextPage = () => {
  return (
    <Layout metaHead="Home">
      <HomeLayout className="divide-y divide-gray-800">
        <SampleScrollablePost count={1} />
        <SampleScrollablePost count={2} />
        <SampleScrollablePost count={3} />
        <SampleScrollablePost count={4} />
      </HomeLayout>
    </Layout>
  )
}

type PostProps = {
  count?: number
  bg?: string
}

const SampleScrollablePost: React.FC<PostProps> = (props) => {
  const { count, bg } = props
  return (
    <div
      className={classNames(
        'snap-start h-screen flex items-center justify-center text-3xl',
        `${bg}`
      )}
    >
      SCROLL NUMBER {count}
    </div>
  )
}

export default authProtected(Home)
