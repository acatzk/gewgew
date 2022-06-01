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
    <div className="antialiased bg-[#18191a] text-[#e7e9ec] min-h-screen">
      <Head>
        <title>{metaHead} / Gewgew</title>
      </Head>
      <div className="flex flex-row min-h-screen">
        <SideBar />
        <div className="relative w-1/4 flex-grow hidden lg:block border-r border-gray-700"></div>
        <div className="relative w-1/2 flex-grow lg:flex-none border-r border-gray-700"></div>
        <div className="relative w-1/4   flex-grow hidden md:block"></div>
      </div>
    </div>
  )
}

export default Layout
