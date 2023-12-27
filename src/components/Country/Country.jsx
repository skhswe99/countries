import axios from "axios"
import { useEffect, useState } from "react"
import './Country.css'

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState('')
    const apiKey = '49976a4ed3f79bf5f30c7168e8cc8d2d'
    useEffect(() => {
        if (country) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}`)
                    .then(res => {
                        setWeather(res.data)
                        return res.data
                    })
                    .then(data => {
                        setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
                    })
                    .catch(err => {
                        console.log('err = ', err)
                    })
        }
    }, [])

    if (country) {

        return(
            <div>
                <h2>{country.name.common}</h2>
                capital {country.capital}<br />
                area {country.area}
                <h3>languages:</h3>
                <ul>
                    {Object.keys(country.languages).map(langkey => <li key={langkey}>{country.languages[langkey]}</li>)}
                </ul>
                <img src={country.flags.png} className="flag"/><br />
                <h3>Weather in {country.capital}</h3>
                {weather ?  `temperature ${(weather.main.temp - 273.15).toFixed(2)} Celcius` : null}<br />
                <img src={`${icon}`} className="weather-icon"/>
            </div>
        )
    }

    return null
}

export default Country