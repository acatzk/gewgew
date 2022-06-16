import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import Layout from '~/layouts/Layout'
import HomeLayout from '~/layouts/HomeLayout'
import { authProtected } from '~/utils/auth-protected'
import { classNames } from '~/utils/classNames'
import { useUserAvatarUrl, useUserData } from '@nhost/react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const Home: NextPage = () => {
  return (
    <Layout metaHead="Home">
      <HomeLayout className="divide-y divide-gray-darker">
        <SampleScrollablePost
          count={1}
          url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <SampleScrollablePost
          count={2}
          url="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
        />
        <SampleScrollablePost
          count={3}
          url="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <SampleScrollablePost
          count={4}
          url="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
        />
        <SampleScrollablePost
          count={5}
          url="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
        />
      </HomeLayout>
    </Layout>
  )
}

type PostProps = {
  count?: number
  bg?: string
  url?: any
}

const SampleScrollablePost: React.FC<PostProps> = (props) => {
  const { count, bg, url } = props
  const userAvatarUrl = useUserAvatarUrl()
  const user = useUserData()

  return (
    <section
      className={classNames(
        'snap-start h-screen flex items-center justify-center',
        `${bg}`
      )}
    >
      <div className="border border-black rounded-xl bg-darker m-20 overflow-hidden">
        <header className="flex items-center justify-between py-2.5 px-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black">
              <Image
                src={userAvatarUrl ? userAvatarUrl : url}
                layout="fill"
                alt="avatar"
              />
            </div>
            <div className="flex flex-start flex-col">
              <h2 className="text-sm font-semibold tracking-wide">
                {user?.displayName}
              </h2>
              <div className="flex items-center space-x-1.5 leading-3 text-gray-400">
                <h4 className="text-xs font-light">angryboy19</h4>
                <span className="w-0.5 h-0.5 rounded-full bg-gray-400"></span>
                <p className="text-xs font-light">5-3</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className={classNames(
                'rounded-full hover:bg-[#3a3b3c] p-1.5 sm:p-2',
                'transition ease-in-out duration-150 active:scale-95',
                'focus:outline-none'
              )}
            >
              <BiDotsHorizontalRounded className="w-5 h-5" />
            </button>
          </div>
        </header>
        <main>
          <div className="relative w-[540px] h-[520px] bg-cover border border-black">
            <Image src={url} objectFit="cover" layout="fill" alt="cover" />
          </div>
        </main>
        <footer className="py-2 px-4 text-sm">Comments display here</footer>
      </div>
    </section>
  )
}

export default authProtected(Home)
