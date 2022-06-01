import React from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { useUserData } from '@nhost/react'
import { BsMessenger } from 'react-icons/bs'
import { classNames } from '~/utils/classNames'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiNotification3Fill, RiHome7Fill } from 'react-icons/ri'

type Props = {}

const SideBar: React.FC<Props> = (props) => {
  const user = useUserData()

  return (
    <aside className="bg-[#242526] border-r border-gray-700">
      <nav className="flex flex-col items-center justify-between flex-1 h-full">
        <button className="mt-3 rounded-full overflow-hidden active:scale-95">
          <div className="relative w-10 h-10">
            <Image
              src={
                user
                  ? user?.avatarUrl
                  : 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'
              }
              layout="fill"
              className=""
              alt="profile"
            />
          </div>
        </button>
        <ul className="flex flex-col items-center space-y-2">
          <li className="flex items-center">
            <div className="w-1 h-9 bg-indigo-500 rounded-r"></div>
            <button
              className={classNames(
                'text-indigo-500 rounded-lg hover:bg-[#3a3b3c] p-3 mx-3',
                'transition ease-in-out duration-150'
              )}
            >
              <RiHome7Fill className="w-7 h-7" />
            </button>
          </li>
          <li className="flex items-center">
            <div className="w-1 h-8 bg-indigo-500 rounded-r bg-transparent"></div>
            <button
              className={classNames(
                'text-[#e7e9ec] rounded-lg hover:bg-[#3a3b3c] p-4 mx-3',
                'transition ease-in-out duration-150'
              )}
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </li>
          <li className="flex items-center">
            <div className="w-1 h-8 bg-indigo-500 rounded-r bg-transparent"></div>
            <button
              className={classNames(
                'text-[#e7e9ec] rounded-lg hover:bg-[#3a3b3c] p-3.5 mx-3',
                'transition ease-in-out duration-150'
              )}
            >
              <RiNotification3Fill className="w-6 h-6" />
            </button>
          </li>
          <li className="flex items-center">
            <div className="w-1 h-8 bg-indigo-500 rounded-r bg-transparent"></div>
            <button
              className={classNames(
                'text-[#e7e9ec] rounded-lg hover:bg-[#3a3b3c] p-3.5 mx-3',
                'transition ease-in-out duration-150'
              )}
            >
              <BsMessenger className="w-6 h-6" />
            </button>
          </li>
        </ul>
        <div className="mb-3">
          <button
            className={classNames(
              'rounded-full hover:bg-indigo-500 p-2',
              'transition ease-in-out duration-150'
            )}
          >
            <BiDotsHorizontalRounded className="w-8 h-8" />
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
