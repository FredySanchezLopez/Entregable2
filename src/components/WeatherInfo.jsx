import React, { useState } from 'react'




const WeatherInfo = ({weather, temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)
    console.log(weather);

  return (
    <article className='card'>
        <h1 className='cart__h1'>Weather App</h1>
        <h2 className='cart__h2'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='cart__section__1'>
          <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </section>
        <section className='cart__section__2' >
          <h3 className='cart__section__h3'>"{weather?.weather[0].description}"</h3>
          <ul className='cart__section_ul'>
            <li><span className='cart__section__span2'>Wind Speed</span>{weather?.wind.speed}m/s</li>
            <li><span className='cart__section__span2'>Clouds</span>{weather?.clouds.all}%</li>
            <li><span className='cart__section__span2'>Pressure</span>{weather?.main.pressure}hPa</li>
          </ul>
        </section >
        <h2 className='cart_tempertu' >{isCelsius? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
        <button className='cart__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherInfo