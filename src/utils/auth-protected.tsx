import React from 'react'
import { Spinner } from './Icons'
import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

export const authProtected = (Comp: any) => {
  return function AuthProtected(props: any) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    if (isLoading)
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#18191a]">
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
