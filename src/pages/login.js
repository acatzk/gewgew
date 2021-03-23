import Head from 'next/head'

export default function LoginAuth () {
  return (
    <>
      <Head>
        <title>Login | Social Network</title>
      </Head>
      <div className="antialiased bg-white text-gray-800">
        <div className="relative flex flex-col md:flex-row items-center justify-center  w-full min-h-screen max-w-7xl m-auto space-x-0 md:space-x-12 px-4">
          <div className="flex-shrink-0 max-w-xl">
            <img src="/svgs/together.svg" />
          </div>
          <div className="relative flex flex-col w-full max-w-sm space-y-4">
            <h1 className="text-center text-2xl font-medium">Log in with</h1>
            <div className="space-y-3">
              <button 
                className="
                  border flex items-center justify-center space-x-4 w-full rounded-full py-3 px-8
                  focus:outline-none focus:ring-4 ring-offset-4 focus:ring-indigo-600 
                  focus:ring-opacity-50 transition ease-in-out duration-200
                "
              >
                <img className="w-6 h-6" src="/svgs/social-icon/google.svg" />
                <span className="font-medium text-gray-600 text-sm line-clamp-1">Sign in with Google</span>
              </button>
              <button 
                className="
                  border flex items-center justify-center space-x-4 w-full rounded-full py-3 px-8
                  focus:outline-none focus:ring-4 ring-offset-4 focus:ring-indigo-600 
                  focus:ring-opacity-50 transition ease-in-out duration-200
                "
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
