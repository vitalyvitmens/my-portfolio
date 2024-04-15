import { JsIcon, ReactIcon, TsIcon } from '../utilities/icons'

type MyEducationDataType = {
  title: string
  image: string
  link: string
}

export const MyEducationData: Array<MyEducationDataType> = [
  {
    title: 'СПГУ',
    image: ReactIcon,
    link: 'https://lk.result.school/pl/298989324',
  },
  {
    title: 'БГЭУ',
    image: JsIcon,
    link: 'https://raw.githubusercontent.com/vitalyvitmens/SQLite/main/logo/diplomas/BSUE.jpg',
  },
  {
    title: 'БГАА',
    image: TsIcon,
    link: 'https://raw.githubusercontent.com/vitalyvitmens/SQLite/main/logo/diplomas/MSHFTC.jpg',
  },
]
