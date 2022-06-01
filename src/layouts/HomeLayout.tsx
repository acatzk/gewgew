import React from 'react'
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

type Props = {
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <React.Fragment>
      <section className="relative w-1/4 flex-grow hidden lg:block border-r border-gray-700 min-h-screen overflow-hidden">
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
        </div>
        <div className="flex justify-center bottom-3 inset-x-0 absolute">
          <p className="text-xs text-gray-300">
            All right reserved &copy; 2022
          </p>
        </div>
      </section>
      <main className="relative w-1/2 flex-grow lg:flex-none border-r border-gray-700">
        {children}
      </main>
      <section className="relative w-1/4 flex-grow hidden md:block min-h-screen overflow-y-hidden">
        <div className="sticky top-0 bg-[#18191a] py-3 px-2">
          <div className="relative flex items-center">
            <div className="absolute left-3">
              <BiSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className={classNames(
                'py-2 px-2 block w-full rounded-full bg-[#3a3b3c] focus:outline-none',
                'border-none pl-10 focus:ring-0 placeholder-gray-400',
                'focus:placeholder-gray-300'
              )}
              placeholder="Search"
            />
          </div>
        </div>
        <nav className="divide-y divide-gray-700 space-y-4">
          <div>
            <h1 className="text-xs text-gray-300 px-4 py-2">
              Suggested Accounts
            </h1>
            <ul className="mt-1">
              {dummyAccounts?.map(
                (accounts, i) =>
                  i <= 4 && <SuggestedAccountList key={i} {...accounts} />
              )}
            </ul>
          </div>
          <div className="py-3">
            <h1 className="text-xs text-gray-300 px-4 py-2">
              Following accounts
            </h1>
            <ul className="mt-1">
              {dummyAccounts?.map(
                (accounts, i) =>
                  i <= 3 && <SuggestedAccountList key={i} {...accounts} />
              )}
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
