import { useLayoutEffect, useState } from 'react'
import { Header } from './pages/app/Header/Header'
import { Wrapper } from './pages/app/Wrapper/Wrapper'
import { Main } from './pages/Main/Main'
import { Skills } from './pages/Skills/Skills'
import { Works } from './pages/Works/Works'
import { Offer } from './pages/Offer/Offer'
import { Contacts } from './pages/Contacts/Contacts'
import { Footer } from './pages/app/Footer/Footer'
import './styles/app.scss'
import './styles/animation.scss'
// import Environment from './components/Environment/Environment'

export type LanguageType = 'ru' | 'en'

export const App = () => {
  const [language, setLanguage] = useState<LanguageType>('en')

  useLayoutEffect(() => {
    const getStorageLanguage = localStorage.getItem('language')
    if (getStorageLanguage) {
      setLanguage(JSON.parse(getStorageLanguage))
    }
  }, [])

  useLayoutEffect(() => {
    localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      {/* <Environment /> */}
      <main className="page">
        <Wrapper id="main" animationBg={true}>
          {' '}
          <Main language={language} />{' '}
        </Wrapper>
        <Wrapper id="skill">
          {' '}
          <Skills language={language} />{' '}
        </Wrapper>
        <Wrapper id="work">
          {' '}
          <Works language={language} />{' '}
        </Wrapper>
        <Wrapper heightAuto={true}>
          {' '}
          <Offer language={language} />{' '}
        </Wrapper>
        <Wrapper id="contact">
          {' '}
          <Contacts language={language} />{' '}
        </Wrapper>
        <Wrapper heightAuto={true}>
          {' '}
          <Footer language={language} />{' '}
        </Wrapper>
      </main>
    </div>
  )
}
