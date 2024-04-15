import { ReactNode } from 'react'

type LinkHobbyPropsType = {
  children?: ReactNode
  link?: string
  icon?: {
    alt?: string
    url?: string
  }
}

export const LinkHobby = ({ children, link, icon }: LinkHobbyPropsType) => {
  return (
    <>
      <a
        href={link}
        rel="noopener noreferrer"
        target={'_blank'}
        className={`button link-modern`}
      >
        {icon ? <img src={icon.url} alt={icon.alt} /> : children}
      </a>
    </>
  )
}
