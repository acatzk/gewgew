import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Spinner } from '~/utils/Icons'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { nhost } from '~/lib/nhost-client'
import { ImFacebook } from 'react-icons/im'
import { classNames } from '~/utils/classNames'
import SignInUpForm from '~/components/SignInUpForm'
import { useAuthenticationStatus } from '@nhost/react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

type FormProps = {
  display_name?: string
  email: string
  password: string
}

const Index: NextPage = () => {
  const router = useRouter()
  let [isLoginPage, setIsLoginPage] = useState(true)
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  const handleSwitchForm = () => setIsLoginPage((isLoginPage = !isLoginPage))

  const handleAuthSubmit = async ({
    display_name,
    email,
    password,
  }: FormProps) => {
    if (isLoginPage) {
      const { session, error } = await nhost.auth.signIn({
        email,
        password,
      })
      authToastResponse(session, error)
    } else {
      const { session, error } = await nhost.auth.signUp({
        email,
        password,
        options: {
          displayName: display_name,
        },
      })
      authToastResponse(session, error)
    }
  }

  function authToastResponse(session: any, error: any) {
    if (session) {
      const {
        user: { displayName },
      } = session
      toast.success(`Good day ${displayName}!`)
    }
    if (error) {
      toast.error(`${error?.message}`)
    }
  }

  React.useEffect(() => {
    if (isAuthenticated) router.push('/home')
  }, [isAuthenticated])

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#18191a]">
        <Spinner className="w-8 md:w-10 h-8 md:h-10 text-indigo-600" />
      </div>
    )

  return (
    <React.Fragment>
      <Head>
        <title>{isLoginPage ? 'Login' : 'Sign up'} / Gewgew</title>
      </Head>
      <section className="min-h-screen antialiased flex items-stretch text-white bg-darkest">
        <div
          className={classNames(
            'lg:flex w-1/2 hidden bg-gray-500',
            'bg-no-repeat bg-cover relative items-center',
            'bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]'
          )}
        >
          <div className="absolute bg-darkest opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-extrabold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <BsTwitter className="text-white w-6 h-6" />
            <ImFacebook className="text-white w-6 h-6" />
            <BsInstagram className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="lg:w-1/2 bg-darkest w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div
            className={classNames(
              'absolute lg:hidden z-10 inset-0 bg-gray-500',
              'bg-no-repeat bg-cover items-center',
              'bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]'
            )}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full z-20">
            <div className="flex justify-center flex-col items-center">
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/icon.png"
                  className="bg-cover bg-no-repeat"
                  layout="fill"
                  alt="Logo"
                  quality={100}
                />
              </div>
            </div>
            <SocialAuthButtons />
            <p className="text-gray-100">or use your email</p>
            <SignInUpForm
              isLoginPage={isLoginPage}
              actions={{ handleSwitchForm, handleAuthSubmit }}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

function SocialAuthButtons() {
  return (
    <div className="py-6 space-x-4">
      <button
        type="button"
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        f
      </button>
      <button
        type="button"
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        G+
      </button>
      <button
        type="button"
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        in
      </button>
    </div>
  )
}

export default Index
