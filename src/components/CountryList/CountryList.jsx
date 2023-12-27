import './CountryList.css'
import Country from '../Country/Country'
import { useState } from 'react'

const CountryList = ({countries}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const showView = (country) => {
        console.log('show button clicked for country name = ', country.name.common)
        setSelectedCountry(country)
    }

    if (countries.length > 10) {
        return(
            <>
                Too many matches, specify another filter
            </>
        )
    }

    if (countries.length > 1) {
        return(
            <>
                <ul>
                    {countries.map(country => <li key={country.name.common}>{country.name.common}<button onClick={()=>showView(country)}>show</button></li>)}
                </ul>
                <Country country={selectedCountry} />
            </>
        )
    }

    if (countries.length == 1) {
        // console.log('langauges.keys =', Object.keys(countries[0].languages))
        return(
            <Country country={countries[0]} />
        )
    }

    return null
}

export default CountryList