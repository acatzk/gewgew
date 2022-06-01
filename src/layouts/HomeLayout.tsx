import React from 'react'
import { classNames } from '~/utils/classNames'
import { suggedtedItems, SuggedtedProps } from '~/utils/object-items'

type Props = {
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <React.Fragment>
      <div className="relative w-1/4 flex-grow hidden lg:block border-r border-gray-700 min-h-screen">
        <div className="flex flex-col px-3 py-5 overflow-y-aut">
          <h1 className="text-2xl font-bold">Gewgew</h1>
          <nav className="mt-4 flex flex-col">
            <h2 className="font-bold text-sm">Suggested</h2>
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
      </div>
      <div className="relative w-1/2 flex-grow lg:flex-none border-r border-gray-700">
        {children}
      </div>
      <div className="relative w-1/4 flex-grow hidden md:block"></div>
    </React.Fragment>
  )
}

const SuggestedList = ({ name, Icon }: SuggedtedProps) => {
  return (
    <li>
      <a
        href="#"
        className={classNames(
          'flex items-center space-x-4 text-sm px-4 py-3 rounded-lg',
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

export default HomeLayout
