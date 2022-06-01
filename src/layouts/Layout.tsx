import React from 'react'
import Head from 'next/head'
import SideBar from '~/components/SideBar'
import { nhost } from '~/lib/nhost-client'
import { getNhostSession } from '@nhost/nextjs'
import { GetServerSidePropsContext } from 'next'

type Props = {
  metaHead?: string
  children: React.ReactNode
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const nhostSession = await getNhostSession(
    `${process.env.NEXT_PUBLIC_NHOST_BACKEND}`,
    context
  )

  return {
    props: {
      nhostSession,
    },
  }
}

const Layout: React.FC<Props> = (props) => {
  const { metaHead, children } = props

  const handleLogout = async () => await nhost.auth.signOut()

  return (
    <div className="antialiased bg-[#18191a] text-[#e7e9ec] min-h-screen">
      <Head>
        <title>{metaHead} / Gewgew</title>
      </Head>
      <div className="flex flex-row min-h-screen">
        <SideBar actions={{ handleLogout }} />
        {children}
      </div>
    </div>
  )
}

export default Layout
