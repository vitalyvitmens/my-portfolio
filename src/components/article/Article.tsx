import { ReactNode } from 'react'
import LazyLoad from 'react-lazyload'
import { PhotoSkeleton } from '../skeletons/PhotoSkeleton/PhotoSkeleton'
import './Article.scss'

type PaperPropsType = {
  viewWeb: string
  viewCode: string
  children?: ReactNode
  image: string
  title: string
  linkWeb?: string
  linkCode?: string
}

export const Article = ({
  children,
  linkWeb = '/',
  linkCode = '/',
  ...props
}: PaperPropsType) => {
  return (
    <article className="article">
      <div className="article__image">
        <PhotoSkeleton>
          <LazyLoad>
            <img src={props.image} alt={props.title} />
          </LazyLoad>
        </PhotoSkeleton>
        <a
          href={linkWeb}
          rel="noopener noreferrer"
          target={'_blank'}
          className="article__button"
        >
          {props.viewWeb}
        </a>
        <a
          href={linkCode}
          rel="noopener noreferrer"
          target={'_blank'}
          className="article__button"
        >
          {props.viewCode}
        </a>
      </div>

      <h3 className="article__title">{props.title}</h3>
      <p className="article__description">{children}</p>
    </article>
  )
}
