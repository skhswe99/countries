import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState('')
    const apiKey = '49976a4ed3f79bf5f30c7168e8cc8d2d'
    useEffect(() => {
        if (country) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}`)
                    .then(res => {
                        console.log('res data in axios call = ', res.data)
                        setWeather(res.data)
                        setIcon(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
                        console.log('icon = ', `${weather.weather[0].icon}`)
                    })
                    // .catch(err => {
                    //     console.log('err = ', err)
                    // })
        }
    }, [])

    if (country) {

        return(
            <div>
                <h2>{country.name.common}</h2>
                {country.capital}<br />
                {country.area}
                <h3>languages:</h3>
                <ul>
                    {/* {countries[0].languages.map(language => <li key={language}>{language}</li>     )} */}
                    {Object.keys(country.languages).map(langkey => <li key={langkey}>{country.languages[langkey]}</li>)}
                </ul>
                <img src={country.flags.png} /><br />
                Weather in {country.capital}<br />
                {weather ?  `temperature ${(weather.main.temp - 273.15).toFixed(2)} Celcius` : null}<br />
                {/* {`<img src=${icon}/>`} */}
            </div>
        )
    }

    return null
}

export default Country