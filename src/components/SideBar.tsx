import React, { Fragment } from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { useUserData } from '@nhost/react'
import { BsMessenger, BsCheck2 } from 'react-icons/bs'
import { classNames } from '~/utils/classNames'
import { Popover, Transition } from '@headlessui/react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiNotification3Fill, RiHome7Fill } from 'react-icons/ri'

type Props = {
  actions: any
}

const SideBar: React.FC<Props> = (props) => {
  const user = useUserData()
  const { handleLogout } = props?.actions

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
        <ul className="flex flex-col items-center space-y-2 mb-3">
          <li className="flex items-center">
            <div className="w-1 h-9 bg-indigo-500 rounded-r"></div>
            <button
              className={classNames(
                'text-indigo-500 rounded-lg hover:bg-[#3a3b3c] p-3 mx-3',
                'transition ease-in-out duration-150 active:scale-95'
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
                'transition ease-in-out duration-150 active:scale-95'
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
                'transition ease-in-out duration-150 active:scale-95'
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
                'transition ease-in-out duration-150 active:scale-95'
              )}
            >
              <BsMessenger className="w-6 h-6" />
            </button>
          </li>
        </ul>
        <div className="mb-3">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    'rounded-full hover:bg-indigo-500 p-2',
                    'transition ease-in-out duration-150 active:scale-95',
                    'focus:outline-none'
                  )}
                >
                  <BiDotsHorizontalRounded className="w-8 h-8" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -top-36 left-40 z-10 w-screen max-w-xs transform -translate-x-1/2 ">
                    <div className="absolute bg-[#18191a] w-5 h-5 -bottom-1 rotate-45 left-4 shadow-md -z-10"></div>
                    <div className="bg-[#18191a] overflow-hidden rounded-lg shadow-md ring-1 ring-white ring-opacity-5 z-20">
                      <div className="flex py-4 justify-between">
                        <div className="flex items-center px-4 space-x-4">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
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
                          <div className="flex flex-col">
                            <h1 className="uppercase text-sm font-bold">
                              {user?.displayName}
                            </h1>
                            <span className="text-xs font-light">
                              {user?.email}
                            </span>
                          </div>
                        </div>
                        <BsCheck2 className="w-6 h-6 text-indigo-500 mr-4" />
                      </div>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className={classNames(
                          'border-t border-gray-800 py-4 px-4 text-sm w-full text-left',
                          'hover:bg-[#262729] transition ease-in-out duration-150',
                          'active:bg-[#18191a]'
                        )}
                      >
                        Log out @angryboy_19
                      </button>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
