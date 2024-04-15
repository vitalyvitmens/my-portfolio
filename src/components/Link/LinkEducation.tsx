import { ReactNode } from 'react'

type LinkEducationPropsType = {
  children?: ReactNode
  link?: string
  icon?: {
    alt?: string
    url?: string
  }
}

export const LinkEducation = ({
  children,
  link,
  icon,
}: LinkEducationPropsType) => {
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
