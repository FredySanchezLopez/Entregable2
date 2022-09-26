import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherInfo from './components/WeatherInfo'



function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  

  useEffect(() => {
    const succes = pos => {
       const obj = {
         lat: pos.coords.latitude,
         lon: pos.coords.longitude
       }
       setCoords(obj)
    } 

    navigator.geolocation.getCurrentPosition(succes)
    
    
  }, [])

  useEffect(() => {
    if (coords) {
      const APIKEY = '129ae690c6a7fe13c6b6d0c4c5339f93'
      const BASEURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`

      axios.get(BASEURL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 - 32).toFixed(1)
          setTemperature({celsius, farenheit})
          setWeather(res.data)
        })
        
        .catch(err=>console.log(err))
    }

  }, [coords])




  return (
    <div className="App">
      {weather ? <WeatherInfo 
      weather={weather}
      temperature={temperature}/>
      : <Loading />}
      
      
      
    </div>
  )
}

export default App
