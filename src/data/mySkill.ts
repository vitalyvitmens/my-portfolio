import { Link } from 'react-scroll'
import {
  ApiIcon,
  AntDesignIcon,
  BootstrapIcon,
  CSSIcon,
  SSRIcon,
  PWAIcon,
  StyledComponentsIcon,
  TailwindIcon,
  DockerIcon,
  WebpackIcon,
  ViteIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  MantineIcon,
  MaterialUIIcon,
  MongoDBIcon,
  MongooseIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  ReduxToolkitIcon,
  RTKQueryIcon,
  MobXIcon,
  SASSIcon,
  TestIcon,
  ContractIcon,
  IntegrationIcon,
  E2EIcon,
  PostgreSQLIcon,
  TsIcon,
} from '../utilities/icons'

type MySkillDataType = {
  title: string
  image: string
  link?: string
}

export const MySkillData: Array<MySkillDataType> = [
  {
    title: 'REACT',
    image: ReactIcon,
    link: 'https://github.com/vitalyvitmens/rs-react-optimization-PWA/tree/main/src',
  },
  {
    title: 'JS',
    image: JsIcon,
    link: 'https://github.com/vitalyvitmens/rs-nature/blob/main/src/index.js',
  },
  {
    title: 'TS',
    image: TsIcon,
    link: 'https://github.com/vitalyvitmens/rs-react-todo/blob/main/src/components/ComponentWithSuspense/ComponentWithSuspense.tsx',
  },
  {
    title: 'HTML5',
    image: HtmlIcon,
    link: 'https://github.com/vitalyvitmens/my_profile/blob/main/index.html',
  },
  {
    title: 'CSS',
    image: CSSIcon,
    link: 'https://github.com/vitalyvitmens/own-mobx/blob/main/styles.css',
  },
  {
    title: 'Sass/scss',
    image: SASSIcon,
    link: 'https://github.com/vitalyvitmens/my-portfolio/blob/main/src/styles/mixin.scss',
  },
  {
    title: 'Styled Cp',
    image: StyledComponentsIcon,
    link: 'https://github.com/vitalyvitmens/news-blog/blob/main/frontend/src/components/header/components/control-panel/control-panel.js',
  },
  {
    title: 'Tailwind',
    image: TailwindIcon,
    link: 'https://github.com/vitalyvitmens/test-full-stack-auth-react-project-with-tailwind',
  },
  {
    title: 'Mantine',
    image: MantineIcon,
    link: 'https://github.com/vitalyvitmens/new-project-vite-mantine-dexie-auth-pwa/blob/main/src/pages/HomePage/HomePage.tsx',
  },
  {
    title: 'Bootstrap',
    image: BootstrapIcon,
  },
  {
    title: 'Material-UI',
    image: MaterialUIIcon,
  },
  {
    title: 'Ant Design',
    image: AntDesignIcon,
    link: 'https://github.com/vitalyvitmens/react-crypto-initial/blob/main/src/components/AddAssetForm.jsx',
  },
  {
    title: 'REDUX',
    image: ReduxIcon,
    link: 'https://github.com/vitalyvitmens/react-ts-redux-cart/blob/main/src/redux/productsReducer.ts',
  },
  {
    title: 'Toolkit',
    image: ReduxToolkitIcon,
    link: 'https://github.com/vitalyvitmens/react-ts-redux-toolkit-cart/blob/main/src/redux/store.ts',
  },
  {
    title: 'RTK Query',
    image: RTKQueryIcon,
    link: 'https://github.com/vitalyvitmens/rs-redux-toolkit-rtk-query-contacts/blob/main/src/redux/contacts/api.ts',
  },
  {
    title: 'MobX',
    image: MobXIcon,
    link: 'https://github.com/vitalyvitmens/rs-mobx-contacts/blob/main/src/store/contactsStore.ts',
  },
  {
    title: 'Mongo DB',
    image: MongoDBIcon,
    link: 'https://github.com/vitalyvitmens/socialpost/blob/main/server/app.js',
  },
  {
    title: 'Mongoose',
    image: MongooseIcon,
    link: 'https://github.com/vitalyvitmens/socialpost/blob/main/server/models/Comment.js',
  },
  {
    title: 'Prisma',
    image: PrismaIcon,
  },
  {
    title: 'PostgreSQL',
    image: PostgreSQLIcon,
  },
  {
    title: 'SSR',
    image: SSRIcon,
  },
  {
    title: 'PWA',
    image: PWAIcon,
    link: 'https://github.com/vitalyvitmens/rs-react-todo/blob/main/sw.ts',
  },
  {
    title: 'Rest API',
    image: ApiIcon,
  },
  {
    title: 'Git',
    image: GitIcon,
    link: 'https://github.com/vitalyvitmens/Vladilen-JavaScript/blob/main/Module1_Basic_JavaScript/Git/README.md',
  },
  {
    title: 'Unit Test',
    image: TestIcon,
    link: 'https://github.com/vitalyvitmens/testing/tree/main/spec',
  },
  {
    title: 'Integration',
    image: IntegrationIcon,
    link: 'https://github.com/vitalyvitmens/testing/tree/main/spec',
  },
  {
    title: 'Contract',
    image: ContractIcon,
    link: 'https://github.com/vitalyvitmens/testing/tree/main/spec',
  },
  {
    title: 'E2E Test',
    image: E2EIcon,
    link: 'https://github.com/vitalyvitmens/testing/tree/main/spec',
  },
  {
    title: 'Webpack',
    image: WebpackIcon,
    link: 'https://github.com/vitalyvitmens/rs-nature/blob/main/webpack.config.common.js',
  },
  {
    title: 'Vite',
    image: ViteIcon,
    link: 'https://github.com/vitalyvitmens/rs-react-todo/blob/main/vite.config.ts',
  },
  {
    title: 'Docker',
    image: DockerIcon,
    link: 'https://github.com/vitalyvitmens/news-blog/blob/main/Dockerfile',
  },
  {
    title: 'Figma',
    image: FigmaIcon,
  },
]
