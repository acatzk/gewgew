import React from 'react'
import DialogBox from './DialogBox'
import { RiCloseFill } from 'react-icons/ri'
import { classNames } from '~/utils/classNames'

type Props = {
  isOpen: boolean
  actions: any
}

const PostDialog: React.FC<Props> = (props) => {
  const { isOpen, actions } = props
  const { handleCloseModal } = actions

  return (
    <DialogBox isOpen={isOpen} actions={{ handleCloseModal }}>
      <div className="rounded-xl overflow-hidden bg-gray-dark text-white border-black">
        <div
          className={classNames(
            'relative flex flex-col border-none shadow-lg w-full max-w-lg pointer-events-auto',
            'bg-clip-padding rounded-md outline-none text-current'
          )}
        >
          <div
            className={classNames(
              'modal-header flex flex-shrink-0 items-center justify-between',
              'p-4 border-b border-gray-light rounded-t-md'
            )}
          >
            <h5
              className="text-xl font-medium leading-normal"
              id="exampleModalLabel"
            >
              Create Post
            </h5>
            <button
              type="button"
              className={classNames(
                'p-2 text-white border-none rounded-full',
                'opacity-50 focus:shadow-none focus:outline-none focus:opacity-100',
                'hover:opacity-75 hover:no-underline hover:bg-gray-darkest'
              )}
            >
              <RiCloseFill className="w-5 h-5" />
            </button>
          </div>
          <div className="modal-body relative p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus quasi officiis vitae amet nisi, dolor consequatur
            eligendi! Autem quibusdam sit nulla, facere reprehenderit modi,
            earum perferendis veritatis corporis aliquam assumenda.
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-light rounded-b-md">
            <button
              type="button"
              className="px-6
                py-2.5
                bg-purple-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-purple-700 hover:shadow-lg
                focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-purple-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </DialogBox>
  )
}

export default PostDialog
