import {
  ApiIcon,
  CSSIcon,
  SSRIcon,
  PWAIcon,
  StyledComponentsIcon,
  DockerIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  MantineIcon,
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
    title: 'CSS',
    image: CSSIcon,
  },
  {
    title: 'Styled Cp',
    image: StyledComponentsIcon,
  },
  {
    title: 'Sass/scss',
    image: SASSIcon,
  },
  {
    title: 'Mantine',
    image: MantineIcon,
  },
  {
    title: 'SSR',
    image: SSRIcon,
  },
  {
    title: 'PWA',
    image: PWAIcon,
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
    title: 'HTML5',
    image: HtmlIcon,
  },
  {
    title: 'figma',
    image: FigmaIcon,
  },
]
