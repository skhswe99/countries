import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList/CountryList'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [results, setResult] = useState([])

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
  useEffect(() => {
    axios.get(`${baseUrl}api/all`)
          .then(res => {
            setAllCountries(res.data)
          })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setResult(allCountries.filter(country => country.name.common.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0))
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      <CountryList countries={results} />
    </div>
  )
}

export default App
