import { ReactIcon, BGEUIcon, BGAAIcon } from '../utilities/icons'

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
    title: 'Белорусский государственный экономический университет',
    image: BGEUIcon,
    link: 'https://raw.githubusercontent.com/vitalyvitmens/SQLite/main/logo/diplomas/BSUE.jpg',
  },
  {
    title: 'Белорусская государственная академия авиации',
    image: BGAAIcon,
    link: 'https://raw.githubusercontent.com/vitalyvitmens/SQLite/main/logo/diplomas/MSHFTC.jpg',
  },
]
