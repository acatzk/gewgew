import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingScreen from '~/components/LoadingScreen'

export default function Home() {

  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
  
  return (
    <>
      <Head>
        <title>Social Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingScreen />
    </>
  )
}
