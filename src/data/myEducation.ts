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
    link: 'https://github.com/vitalyvitmens',
  },
  {
    title: 'БГЭУ',
    image: JsIcon,
    link: 'https://github.com/vitalyvitmens',
  },
  {
    title: 'БГАА',
    image: TsIcon,
    link: 'https://github.com/vitalyvitmens',
  },
]
