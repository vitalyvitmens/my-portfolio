import { Link } from 'react-scroll'
import { LanguageType } from '../../../App'
import { LinkModern } from '../../../components/Link/LinkModern'
import { SocialsData } from '../../../data/socials'
import { ToUpIcon } from '../../../utilities/icons'
import './Footer.scss'
import { WeatherDateInfo } from '../../../components/WeatherDateInfo/WeatherDateInfo'

export const Footer = ({ language }: { language: LanguageType }) => {
  const Data = SocialsData

  return (
    <footer className="footer">
      <ul className="footer__list">
        {Data.map((el, key) => {
          return (
            <li key={key} className="footer__item">
              <LinkModern
                icon={{ url: el.icon, alt: el.title }}
                link={el.link}
              />
            </li>
          )
        })}
      </ul>
      <span>
        <WeatherDateInfo language={language} />
      </span>
      <Link to="main" smooth={true} className="footer__to-up">
        <img src={ToUpIcon} alt="to-up" />
      </Link>
    </footer>
  )
}
