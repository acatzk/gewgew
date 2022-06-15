import React from 'react'
import Head from 'next/head'
import SideBar from '~/components/SideBar'
import { nhost } from '~/lib/nhost-client'
import { getNhostSession } from '@nhost/nextjs'
import { GetServerSidePropsContext } from 'next'
import { classNames } from '~/utils/classNames'

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
    <div className="relative antialiased bg-darkest text-[#e7e9ec]">
      <Head>
        <title>{metaHead} / Gewgew</title>
      </Head>
      <div
        className={classNames(
          'flex flex-col-reverse sm:flex-row min-h-screen h-screen overflow-y-hidden'
        )}
      >
        <SideBar actions={{ handleLogout }} />
        {children}
      </div>
    </div>
  )
}

export default Layout
