import {
  ApiIcon,
  CSSIcon,
  DockerIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  MuiIcon,
  ReactIcon,
  ReduxIcon,
  SASSIcon,
  TestIcon,
  TsIcon,
} from '../utilities/icons'

type MySkillDataType = {
  title: string
  image: string
}

export const MySkillData: Array<MySkillDataType> = [
  {
    title: 'REACT',
    image: ReactIcon,
  },
  {
    title: 'JS',
    image: JsIcon,
  },
  {
    title: 'TS',
    image: TsIcon,
  },
  {
    title: 'REDUX',
    image: ReduxIcon,
  },
  {
    title: 'HTML5',
    image: HtmlIcon,
  },
  {
    title: 'CSS',
    image: CSSIcon,
  },
  {
    title: 'Sass/scss',
    image: SASSIcon,
  },
  {
    title: 'MUI',
    image: MuiIcon,
  },
  {
    title: 'Rest API',
    image: ApiIcon,
  },
  {
    title: 'Unit Test',
    image: TestIcon,
  },
  {
    title: 'Git',
    image: GitIcon,
  },
  {
    title: 'Docker',
    image: DockerIcon,
  },
  {
    title: 'figma',
    image: FigmaIcon,
  },
]
