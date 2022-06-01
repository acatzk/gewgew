import React from 'react'
import Head from 'next/head'
import SideBar from '~/components/SideBar'

type Props = {
  metaHead?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { metaHead } = props
  return (
    <div className="antialiased bg-gray-800 text-white min-h-screen">
      <Head>
        <title>{metaHead} / Gewgew</title>
      </Head>
      <div className="flex flex-row">
        <SideBar />
        <div className="relative w-1/4 bg-blue-200 flex-grow hidden lg:block"></div>
        <div className="relative w-1/2 bg-green-200 flex-grow lg:flex-none"></div>
        <div className="relative w-1/4 bg-yellow-200 flex-grow hidden md:block"></div>
      </div>
    </div>
  )
}

export default Layout
