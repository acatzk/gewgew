import { Slide, ToastTransitionProps } from 'react-toastify'

export type ToastProps = {
  position: string
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: undefined
  theme: string
  transition: ({
    children,
    position,
    preventExitTransition,
    done,
    nodeRef,
    isIn,
  }: ToastTransitionProps) => JSX.Element
}

export const toastOptions: ToastProps = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide,
}
