import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import React, { useState } from 'react'
import { ImFacebook } from 'react-icons/im'
import { classNames } from '~/utils/classNames'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

const Index: NextPage = () => {
  let [isLoginPage, setIsLoginPage] = useState(true)

  const handleSwitchForm = () => setIsLoginPage((isLoginPage = !isLoginPage))

  return (
    <React.Fragment>
      <Head>
        <title>Gewgew</title>
      </Head>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className={classNames(
            'lg:flex w-1/2 hidden bg-gray-500',
            'bg-no-repeat bg-cover relative items-center',
            'bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]'
          )}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
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
        <div className="lg:w-1/2 bg-[#161616] w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div
            className={classNames(
              'absolute lg:hidden z-10 inset-0 bg-gray-500',
              'bg-no-repeat bg-cover items-center',
              'bg-[url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)]'
            )}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <div className="flex justify-center flex-col items-center mb-3">
              <div className="relative my-2 w-20 h-20">
                <Image
                  src="/assets/icon.png"
                  className="bg-cover bg-no-repeat"
                  layout="fill"
                  alt="Logo"
                  quality={100}
                />
              </div>
              <h1 className="font-bold text-2xl text-indigo-200">Gewgew</h1>
            </div>
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
            <p className="text-gray-100">or use your email</p>
            <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="flex justify-center">
                <div className="pb-2 pt-4 w-full px-4 lg:px-0">
                  {!isLoginPage && (
                    <div className="form-floating mb-3 w-full">
                      <input
                        type="text"
                        className={classNames(
                          'form-control px-3 py-1.5 font-normal text-text-white',
                          'bg-clip-padding border border-solid border-gray-300',
                          'transition  ease-in-out duration-300 m-0 block w-full p-4',
                          'text-lg rounded-sm bg-black',
                          'focus:border-indigo-600 focus:outline-none'
                        )}
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput" className="text-white">
                        Fullname
                      </label>
                    </div>
                  )}
                  <div className="form-floating mb-3 w-full">
                    <input
                      type="email"
                      className={classNames(
                        'form-control px-3 py-1.5 font-normal text-text-white',
                        'bg-clip-padding border border-solid border-gray-300',
                        'transition  ease-in-out duration-300 m-0 block w-full p-4',
                        'text-lg rounded-sm bg-black',
                        'focus:border-indigo-600 focus:outline-none'
                      )}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput" className="text-white">
                      Email address
                    </label>
                  </div>
                  <div className="form-floating mb-3 w-full">
                    <input
                      type="password"
                      className={classNames(
                        'form-control px-3 py-1.5 font-normal text-text-white',
                        'bg-clip-padding border border-solid border-gray-300',
                        'transition  ease-in-out duration-300 m-0 block w-full p-4',
                        'text-lg rounded-sm bg-black',
                        'focus:border-indigo-600 focus:outline-none'
                      )}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput" className="text-white">
                      Password
                    </label>
                  </div>
                </div>
              </div>
              {isLoginPage && (
                <div className="text-right text-gray-400">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-100 px-4 lg:px-0"
                  >
                    Forgot your password?
                  </a>
                </div>
              )}
              <div className="px-4 pb-2 pt-4">
                <button
                  type="submit"
                  className={classNames(
                    'uppercase block w-full p-4 text-lg rounded-full',
                    'bg-indigo-500 hover:bg-indigo-600 focus:outline-none'
                  )}
                >
                  {isLoginPage ? 'sign in' : 'sign up'}
                </button>
                <div className="mt-3 text-center text-gray-400 ">
                  <button
                    onClick={handleSwitchForm}
                    className="text-sm hover:underline hover:text-gray-100"
                  >
                    {!isLoginPage
                      ? 'Do you have an account?'
                      : "You don't have an account?"}
                  </button>
                </div>
              </div>
              <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-6 lg:hidden ">
                <BsTwitter className="text-white w-6 h-6" />
                <ImFacebook className="text-white w-6 h-6" />
                <BsInstagram className="text-white w-6 h-6" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Index
