import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signout, useSession } from 'next-auth/client'

export default function HomePage () {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session])

  return (
    <>
      <Head>
        <title>Home | Gewgew</title>
      </Head>
      <div className="flex max-w-md text-2xl mx-auto">
        <h1 className="font-semibold">Welcome </h1>
        <button
          onClick={() => signout()}
        >
          SignOut
        </button>
      </div>
    </>
  )
}