import React, { useState } from 'react'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'
import { MdVerified } from 'react-icons/md'
import { classNames } from '~/utils/classNames'
import {
  suggedtedItems,
  SuggedtedProps,
  dummyAccounts,
  DummyAccountProps,
} from '~/utils/object-items'
import DialogBox from '~/components/DialogBox'
import PostDialog from '~/components/PostDialog'

type Props = {
  children: React.ReactNode
  className?: string
}

const HomeLayout: React.FC<Props> = (props) => {
  const { children, className } = props
  let [isOpen, setIsOpen] = useState(true)

  const handleCloseModal = () => setIsOpen(false)
  const handleOpenModal = () => setIsOpen(true)

  return (
    <React.Fragment>
      <section
        className={classNames(
          'relative w-1/5 flex-grow hidden lg:block border-r',
          'border-black min-h-screen overflow-hidden'
        )}
      >
        <div className="flex flex-col px-3 py-5 overflow-y-aut">
          <h1 className="text-2xl font-bold px-2">Gewgew</h1>
          <nav className="mt-4 flex flex-col">
            <h2 className="font-bold text-sm px-2">Suggested</h2>
            <ul className="mt-2">
              {suggedtedItems.map((list, i) => (
                <SuggestedList key={i} {...list} />
              ))}
            </ul>
          </nav>
          <div className="mt-2">
            <button
              type="button"
              onClick={handleOpenModal}
              className={classNames(
                'text-eft py-3 px-4 text-white bg-primary block w-full rounded-full',
                'font-bold active:scale-95 transition ease-in-out duration-150',
                'hover:bg-indigo-dark active:bg-indigo-darkest tracking-widest'
              )}
            >
              GewPost
            </button>
            <PostDialog isOpen={isOpen} actions={{ handleCloseModal }} />
          </div>
        </div>
        <div className="flex justify-center bottom-3 inset-x-0 absolute">
          <p className="text-xs text-gray-300">
            All right reserved &copy; 2022
          </p>
        </div>
      </section>
      <main
        className={classNames(
          'relative w-full sm:w-1/2 flex-grow lg:flex-none md:border-r border-black overflow-y-auto',
          'scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-darkest',
          'scrollbar-thumb-rounded',
          `${className}`
        )}
      >
        {children}
      </main>
      <section
        className={classNames(
          'relative w-1/4 hidden md:block flex-grow overflow-y-auto min-h-screen',
          'scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-darkest',
          'scrollbar-thumb-rounded'
        )}
      >
        <div className="sticky top-0 bg-darkest py-3 px-4 z-10 border-b border-black shadow">
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <BiSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className={classNames(
                'transition ease-in-out duration-300 block w-full px-4 py-1.5',
                'text-lg rounded-lg focus:outline-none focus:bg-black',
                'focus:ring-inset hover:ring-2 ring-inset ring-gray-hover',
                'disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2',
                'form-control pl-10 block w-full rounded-full bg-dark border-0',
                'focus:ring-primary'
              )}
              placeholder="Search"
            />
          </div>
        </div>
        <nav className="divide-y divide-gray-darker space-y-4">
          <div>
            <h1 className="text-xs text-gray-300 px-4 py-2">
              Suggested Accounts
            </h1>
            <ul className="mt-1">
              {dummyAccounts?.map((accounts, i) => (
                <SuggestedAccountList key={i} {...accounts} />
              ))}
            </ul>
          </div>
          <div className="py-3">
            <h1 className="text-xs text-gray-300 px-4 py-2">
              Following accounts
            </h1>
            <ul className="mt-1">
              {dummyAccounts?.map((accounts, i) => (
                <SuggestedAccountList key={i} {...accounts} />
              ))}
            </ul>
          </div>
        </nav>
      </section>
    </React.Fragment>
  )
}

const SuggestedList = ({ name, Icon }: SuggedtedProps) => {
  return (
    <li>
      <a
        href="#"
        className={classNames(
          'flex items-center space-x-4 text-sm px-3 py-3 rounded-lg',
          'active:scale-95 transition ease-in-out duration-150',
          'hover:bg-[#303031] -mx-1'
        )}
      >
        <Icon className="w-5 h-5" />
        <span>{name}</span>
      </a>
    </li>
  )
}

const SuggestedAccountList = ({
  username,
  displayName,
  avatarUrl,
}: DummyAccountProps) => {
  return (
    <li className="px-2">
      <button
        type="button"
        className={classNames(
          'w-full rounded-lg flex items-center py-1.5 px-3 space-x-4 hover:bg-[#303031]',
          'transition ease-in-out duration-150 active:scale-95'
        )}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={avatarUrl ? avatarUrl : ''}
            layout="fill"
            className=""
            alt="profile"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-1">
            <h1 className="text-sm font-bold lowercase">{username}</h1>
            <MdVerified className="w-4 h-4 text-[#20d5ec]" />
          </div>
          <span className="text-xs font-light text-left capitalize">
            {displayName}
          </span>
        </div>
      </button>
    </li>
  )
}

export default HomeLayout
