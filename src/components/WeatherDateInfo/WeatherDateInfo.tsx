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
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=4707c215225f3783a2e45a56dd73e1b2'
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name)
        setTemperature(Math.round(main.temp))
        setWeather(weather[0].description)
      })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
        width: '800px',
        fontWeight: 'bold',
      }}
    >
      <div>
        <div>My Portfolio</div>
        <div>
          ©{' '}
          {new Date().toLocaleString('ru', {
            year: 'numeric',
          })}{' '}
          vitalyvitmens. All rights reserved.
        </div>
      </div>
      <div>
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
