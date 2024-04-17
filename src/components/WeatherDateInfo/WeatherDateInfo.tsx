import { useEffect, useState } from 'react'
import { WEATHER_API_KEY } from '../../constants/apiKeys'
import { weatherApiBaseUrl } from '../../constants/baseUrls'
import './WeatherDateInfo.scss'

type FooterProps = {
  className?: string
  language: string
}

export const WeatherDateInfo: React.FC<FooterProps> = ({ language }) => {
  const [city, setCity] = useState<string>('Minsk')
  const [temperature, setTemperature] = useState<number | null>(null)
  const [weather, setWeather] = useState<string>('')

  useEffect(() => {
    fetch(weatherApiBaseUrl(language) + WEATHER_API_KEY)
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name)
        setTemperature(Math.round(main.temp))
        setWeather(weather[0].description)
      })
  }, [language])

  return (
    <div className="weather">
      <div className="weather__row-year">
        <div>My Portfolio</div>
        <div>
          ©{' '}
          {new Date().toLocaleString(language, {
            year: 'numeric',
          })}{' '}
          vitalyvitmens. All rights reserved.
        </div>
      </div>
      <div className="weather__date-temperature">
        <div>
          {city}{' '}
          {new Date().toLocaleString(language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <div>
          {temperature}
          {'°C, '} {weather}
        </div>
      </div>
    </div>
  )
}
