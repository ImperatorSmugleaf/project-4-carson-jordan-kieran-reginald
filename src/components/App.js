import './App.css'
import ApodDisplay from './ApodDisplay'
import Search from './Search'
import Results from './Results'
import { useState, useEffect } from 'react'

const apodURL = `https://classproxy.rtoal.repl.co/apod`

function App() {
  // const user = useAuthentication();

  const [apod, setApod] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(apodURL).then(response => {
      if (response.status >= 200 && response.status < 400) {
        response.json().then(fulfilledRequest => setApod(fulfilledRequest))
      } else {
        setApod({ error: `Error ${response.status}` })
      }
    })
  }, [])

  return (
    <div className="App">
      <div className="Stars"></div>
      <ApodDisplay apod={apod} />
      <Search setData={setData} />
      <Results data={data} />
    </div>
  )
}

export default App
