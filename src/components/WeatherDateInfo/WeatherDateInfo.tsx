import { useEffect, useState } from 'react'
import './WeatherDateInfo.scss'

type FooterProps = {
  className?: string
}

export const WeatherDateInfo: React.FC<FooterProps> = () => {
  const [city, setCity] = useState<string>('')
  const [temperature, setTemperature] = useState<number | null>(null)
  const [weather, setWeather] = useState<string>('')

  useEffect(() => {
    fetch(process.env.REACT_APP_WEATHER_API_KEY as string)
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name)
        setTemperature(Math.round(main.temp))
        setWeather(weather[0].description)
      })
  }, [])

  return (
    <div className="weather">
      <div className="weather__row-year">
        <div>My Portfolio</div>
        <div>
          ©{' '}
          {new Date().toLocaleString('ru', {
            year: 'numeric',
          })}{' '}
          vitalyvitmens. All rights reserved.
        </div>
      </div>
      <div className="weather__date-temperature">
        <div>
          {city}{' '}
          {new Date().toLocaleString('ru', {
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
