import { IconType } from 'react-icons'
import { BiFlag } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { CgUserList } from 'react-icons/cg'
import { GiBackwardTime } from 'react-icons/gi'
import { HiOutlineCalendar } from 'react-icons/hi'

export type SuggedtedProps = {
  name: string
  Icon: IconType
}

export const suggedtedItems = [
  {
    name: 'Followers',
    Icon: CgUserList,
  },
  {
    name: 'Groups',
    Icon: FiUsers,
  },
  {
    name: 'Memories',
    Icon: GiBackwardTime,
  },
  {
    name: 'Saved',
    Icon: BsBookmark,
  },
  {
    name: 'Pages',
    Icon: BiFlag,
  },
  {
    name: 'Event',
    Icon: HiOutlineCalendar,
  },
]
