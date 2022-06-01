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

export type DummyAccountProps = {
  id: number
  username: string
  displayName: string
  avatarUrl?: string
}

export const dummyAccounts: DummyAccountProps[] = [
  {
    id: 1,
    username: 'nianaguerrero',
    displayName: 'Niana Guerero',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1653642385041413~c5_100x100.jpeg?x-expires=1654246800&x-signature=6DKBLNfUz9EmEEr6uYgJA3B007g%3D',
  },
  {
    id: 2,
    username: 'rosmartan',
    displayName: 'Mommy Rosmar',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6bc6a635aa488a892d1a33aeb1c954e0~c5_100x100.jpeg?x-expires=1654246800&x-signature=w6iC1A4TnWUj9UndebunsRlAXII%3D',
  },
  {
    id: 3,
    username: 'yanyandejesus1',
    displayName: 'Yanyan De Jesus',
    avatarUrl:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1645999420289026.jpeg?x-expires=1654246800&x-signature=anI1h0XoH173O1a6pzDbUCfA2BY%3D',
  },
  {
    id: 4,
    username: 'callmegrand',
    displayName: 'Vladimir Grand',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cc52ea21fbc28d4558cba91f85275ebc~c5_100x100.jpeg?x-expires=1654246800&x-signature=51axMDp0a9ZQ81hPJZ3v6yV9QHk%3D',
  },
  {
    id: 5,
    username: 'eyevanana',
    displayName: 'Eya',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/77beb47f005fcff2a108e426725f77b1~c5_100x100.jpeg?x-expires=1654246800&x-signature=y1VLSbVO8FQXSeq%2B3suh%2Bc3qldI%3D',
  },
  {
    id: 6,
    username: 'itsevantan',
    displayName: 'Evan Tan',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9734757566c37e2017f1b09dac3d696e~c5_100x100.jpeg?x-expires=1654246800&x-signature=ctZsuzYuEKw4n0wnzWO%2BebHFN5c%3D',
  },
  {
    id: 7,
    username: 'siliqueenonfficial',
    displayName: 'siliqueen',
    avatarUrl:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/00149023a5266dda456466918c10fd8a.jpeg?x-expires=1654246800&x-signature=O4Bx%2F7IvHLeTms7SCkmk90BaF%2Bg%3D',
  },
  {
    id: 8,
    username: 'spencer_serafica',
    displayName: 'siliqueen',
    avatarUrl:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/28ea3987da71d761d44482d7218c28f8~c5_100x100.jpeg?x-expires=1654246800&x-signature=kUqBvV5pEjDE7sR1YEUtEgKJt2k%3D',
  },
]
