import { Fade } from 'react-awesome-reveal'
import { Paper } from '../../components/Paper/Paper'
import { LanguageType } from '../../App'
import { MyEducationData } from '../../data/myEducation'
import { MyEducationLang } from '../../langs/lang'
import './Education.scss'

export const Educations = ({ language }: { language: LanguageType }) => {
  const Lang = MyEducationLang[language]

  return (
    <div className="education">
      <h2 className="education__title">{Lang.title}</h2>
      <div className="education__body">
        <Fade cascade duration={150} triggerOnce={true} direction={'left'}>
          {MyEducationData[language].map((el, key) => {
            return (
              <Paper
                key={key}
                title={el.title}
                icon={el.image}
                link={el.link}
              />
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
