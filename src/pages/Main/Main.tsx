import { LinkHobby } from '../../components/Link/LinkHobby'
import { AboutMeLang } from '../../langs/lang'
import { LanguageType } from '../../App'
import { HobbyData } from '../../data/hobby'
import Photo from '../../assets/images/photo/photo.jpg'
import './Main.scss'

export const Main = ({ language }: { language: LanguageType }) => {
  const Lang = AboutMeLang[language]
  const Data = HobbyData

  return (
    <div className="main">
      <div className="main__description">
        <div className="main__message">
          <p className="main__welcome subtitle">{Lang.title}</p>
          <h1 className="main__title title">
            {Lang.im} <span>{Lang.name}</span>
          </h1>
          <p className="main__text text">{Lang.description}</p>
        </div>
        <div className="main__fanny">
          <span className="subtitle">{Lang.mood}</span>
          <ul className="main__fanny-list">
            {Data.map((el, key) => {
              return (
                <li key={key}>
                  <LinkHobby icon={{ url: el.icon }} link={el.link} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="main__image">
        <img src={Photo} alt="profile" />
        <div className="main__stack">{Lang.profession}</div>
      </div>
    </div>
  )
}
