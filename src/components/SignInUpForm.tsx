import React from 'react'
import { useForm } from 'react-hook-form'
import { classNames } from '~/utils/classNames'
import { Spinner } from '~/utils/Icons'

type Props = {
  isLoginPage: boolean
  actions: any
}

const SignInUpForm: React.FC<Props> = (props) => {
  const { isLoginPage, actions } = props
  const { handleSwitchForm, handleAuthSubmit } = actions

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()

  return (
    <form
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
      onSubmit={handleSubmit(handleAuthSubmit)}
    >
      <div className="flex justify-center">
        <div className="pb-2 pt-4 w-full px-4 lg:px-0">
          {!isLoginPage && (
            <div className="mb-3">
              <div className="form-floating w-full">
                <input
                  type="text"
                  disabled={isSubmitting}
                  className={classNames(
                    'form-control px-3 py-1.5 font-normal bg-darker',
                    'transition ease-in-out duration-300 block w-full p-4',
                    'text-lg rounded-lg focus:outline-none focus:bg-black',
                    'focus:ring-inset hover:ring-2 ring-inset ring-gray-hover',
                    'disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2',
                    errors?.display_name
                      ? 'focus:border-none border-red-500 focus:ring-red-500 hover:ring-red-500'
                      : 'focus:ring-primary'
                  )}
                  {...register('display_name', {
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  placeholder="James Reid"
                />
                <label className="text-white">Fullname</label>
              </div>
              <div className="flex flex-col text-left mt-1 mx-1">
                {errors.display_name?.type === 'required' && (
                  <span className="text-xs text-red-500 font-medium">
                    Name is required
                  </span>
                )}
                {errors.display_name?.type === 'maxLength' && (
                  <span className="text-xs text-red-500 font-medium">
                    Should have max length of 20
                  </span>
                )}
                {errors.display_name?.type === 'minLength' && (
                  <span className="text-xs text-red-500 font-medium">
                    Name should not less then 4 length
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="mb-3">
            <div className="form-floating w-full">
              <input
                type="email"
                disabled={isSubmitting}
                className={classNames(
                  'form-control px-3 py-1.5 font-normal bg-darker',
                  'transition ease-in-out duration-300 block w-full p-4',
                  'text-lg rounded-lg focus:outline-none focus:bg-black',
                  'focus:ring-inset hover:ring-2 ring-inset ring-gray-hover',
                  'disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2',
                  errors?.email
                    ? 'focus:border-none border-red-500 focus:ring-red-500 hover:ring-red-500'
                    : 'focus:ring-primary'
                )}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput" className="text-white">
                Email address
              </label>
            </div>
            <div className="flex flex-col text-left mt-1 mx-1">
              {errors.email?.type === 'required' && (
                <span className="text-xs text-red-500 font-medium">
                  Email is required
                </span>
              )}
              {errors.email?.message && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.email?.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating w-full">
              <input
                type="password"
                disabled={isSubmitting}
                className={classNames(
                  'form-control px-3 py-1.5 font-normal bg-darker',
                  'transition ease-in-out duration-300 block w-full p-4',
                  'text-lg rounded-lg focus:outline-none focus:bg-black',
                  'focus:ring-inset hover:ring-2 ring-inset ring-gray-hover',
                  'disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2',
                  errors?.password
                    ? 'focus:border-none border-red-500 focus:ring-red-500 hover:ring-red-500'
                    : 'focus:ring-primary'
                )}
                {...register('password', {
                  required: true,
                  minLength: 4,
                })}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput" className="text-white">
                Password
              </label>
            </div>
            <div className="flex flex-col text-left mt-1 mx-1">
              {errors.password?.type === 'required' && (
                <span className="text-xs text-red-500 font-medium">
                  Password is required
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-xs text-red-500 font-medium">
                  Minimum password length of 4
                </span>
              )}
            </div>
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
          disabled={isSubmitting}
          className={classNames(
            'uppercase block w-full p-4 text-lg rounded-full bg-primary',
            'hover:bg-indigo-dark active:bg-indigo-darkest',
            'disabled:cursor-not-allowed disabled:opacity-60',
            'flex justify-center focus:outline-none',
            'transition ease-in-out duration-150',
            'active:scale-95 tracking-wide font-semibold'
          )}
        >
          {isLoginPage ? (
            isSubmitting ? (
              <Spinner className="w-7 h-7 text-white text-center" />
            ) : (
              'sign in'
            )
          ) : isSubmitting ? (
            <Spinner className="w-7 h-7 text-white text-center" />
          ) : (
            'sign up'
          )}
        </button>
        <div className="mt-3 text-center text-gray-400 ">
          <button
            type="button"
            onClick={handleSwitchForm}
            className="text-sm hover:underline hover:text-gray-100 focus:no-underline"
          >
            {!isLoginPage
              ? 'Do you have an account?'
              : "You don't have an account?"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignInUpForm
