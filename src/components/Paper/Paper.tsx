import { ReactNode } from 'react'
import LazyLoad from 'react-lazyload'
import './Paper.scss'

type PaperPropsType = {
  children?: ReactNode
  icon?: string
  title: string
  link?: string
}

export const Paper = ({ children, ...props }: PaperPropsType) => {
  return (
    <section className="paper">
      <LazyLoad height={50}>
        <img src={props.icon} alt="my skill" className="paper__icon" />
      </LazyLoad>
      <a
        href={props.link}
        rel="noopener noreferrer"
        target={'_blank'}
        className="article__button"
      >
        {props.link}
      </a>

      <h3 className="paper__title">{props.title}</h3>
    </section>
  )
}
