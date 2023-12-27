import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Country from './components/Country/Country'

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
  // console.log('filter = ', filter)
  // console.log('countries = ', allCountries)
  console.log('result = ', results)

  return (
    <div>
      find coiuntries <input value={filter} onChange={handleFilter} />
      <Country countries={results} />
    </div>
  )
}

export default App
