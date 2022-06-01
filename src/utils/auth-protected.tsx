import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { Spinner } from './Icons'
import React from 'react'

export const authProtected = (Comp: any) => {
  return function AuthProtected(props: any) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    if (isLoading)
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner className="w-8 md:w-10 h-8 md:h-10 text-indigo-600" />
        </div>
      )

    if (!isAuthenticated) {
      router.push('/')
      return null
    }

    return <Comp {...props} />
  }
}
