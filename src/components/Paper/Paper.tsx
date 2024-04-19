import { ReactNode } from 'react'
import LazyLoad from 'react-lazyload'
import './Paper.scss'

type PaperPropsType = {
  children?: ReactNode
  icon?: string
  title: string
  link?: string
}

export const Paper = ({ children, link, icon, title }: PaperPropsType) => {
  return (
    <>
      <a
        href={link}
        rel="noopener noreferrer"
        target={'_blank'}
        className="education__link"
      >
        <section className="paper">
          <LazyLoad height={50}>
            <img src={icon} alt="my skill" className="paper__icon" />
          </LazyLoad>
          <h3 className="paper__title">{title}</h3>
        </section>
      </a>
    </>
  )
}
