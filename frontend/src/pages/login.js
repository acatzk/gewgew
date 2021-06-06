import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

export default function LoginPage () {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) router.push('/home')
  }, [session])

  return (
    <>
      <Head>
        <title>Login | Gewgew</title>
      </Head>
      <div className="font-sans antialiased bg-white text-gray-800">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen max-w-7xl m-auto space-x-0 md:space-x-12 px-4">
          <div className="flex-shrink-0 max-w-xl">
            <img src="/svgs/together.svg" />
          </div>
          <div className="flex flex-col w-full max-w-sm space-y-4">
            <h1 className="text-center text-xl font-semibold">Log in with</h1>
            <div className="space-y-3">
              <button 
                className="btn-login"
                onClick={() => signIn('google')}
              >
                <img className="w-6 h-6" src="/svgs/social-icon/google.svg" />
                <span className="font-medium text-gray-600 text-sm line-clamp-1">Sign in with Google</span>
              </button>
              <button 
                className="btn-login"
                onClick={() => signIn('github')}
              >
                <img className="w-6 h-6" src="/svgs/social-icon/github.svg" />
                <span className="font-medium text-gray-600 text-sm line-clamp-1">Sign in with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
