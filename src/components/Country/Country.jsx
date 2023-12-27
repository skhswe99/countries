import './Country.css'

const Country = ({countries}) => {
    
    if (countries.length > 10) {
        return(
            <>
                Too many matches, specify another filter
            </>
        )
    }

    if (countries.length > 1) {
        return(
            <ul>
                {countries.map(country => <li key={country.name.common}>{country.name.common}</li>)}
            </ul>
        )
    }

    if (countries.length == 1) {
        console.log('langauges.keys =', Object.keys(countries[0].languages))
        return(
            <div>
                <h2>{countries[0].name.common}</h2>
                {countries[0].capital}<br />
                {countries[0].area}
                <h3>languages:</h3>
                <ul>
                    {/* {countries[0].languages.map(language => <li key={language}>{language}</li>     )} */}
                    {Object.keys(countries[0].languages).map(langkey => <li key={langkey}>{countries[0].languages[langkey]}</li>)}
                </ul>
                    <img src={countries[0].flags.png} />
            </div>
        )
    }

    return null
}

export default Country