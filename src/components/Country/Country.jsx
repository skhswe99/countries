const Country = ({country}) => {
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
                <img src={country.flags.png} />
            </div>
        )
    }

    return null
}

export default Country