import './Works.scss'
import { Article } from '../../components/article/Article'
import { LanguageType } from '../../App'
import { ProjectLang } from '../../langs/lang'
import { ProjectData } from '../../data/project'
import { Fade } from 'react-awesome-reveal'

export const Works = ({ language }: { language: LanguageType }) => {
  const Lang = ProjectLang[language]
  return (
    <div className="work" id="work">
      <div className="work__subtitle">{Lang.beforeTitle}</div>
      <h2 className="work__title title">{Lang.title}</h2>
      <div className="work__body">
        <Fade cascade duration={300} triggerOnce={true} direction={'left'}>
          {ProjectData.map((el, key) => {
            return (
              <Article
                key={key}
                image={el.image}
                linkWeb={el.linkWeb}
                linkCode={el.linkCode}
                title={el.title}
                viewWeb={Lang.hoverWeb}
                viewCode={Lang.hoverCode}
              >
                {el.description}
              </Article>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
