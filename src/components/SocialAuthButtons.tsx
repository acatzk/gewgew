import { CgFacebook } from 'react-icons/cg'
import { RiGithubLine } from 'react-icons/ri'
import { useProviderLink } from '@nhost/react'
import { classNames } from '~/utils/classNames'
import { AiOutlineGooglePlus } from 'react-icons/ai'

export const SocialAuthButtons = () => {
  const { github, google, facebook } = useProviderLink()

  return (
    <div className="py-6 space-x-4">
      <a
        href={facebook}
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        <CgFacebook className="w-6 h-6" />
      </a>
      <a
        href={google}
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        <AiOutlineGooglePlus className="w-6 h-6" />
      </a>
      <a
        href={github}
        className={classNames(
          'w-10 h-10 items-center justify-center inline-flex',
          'rounded-full font-bold text-lg border-2 border-white',
          'hover:bg-white hover:text-black transition ease-in-out',
          'duration-150'
        )}
      >
        <RiGithubLine className="w-6 h-6" />
      </a>
    </div>
  )
}
