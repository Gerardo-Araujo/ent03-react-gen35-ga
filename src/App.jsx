/**
 * rafce 
 *  https://rickandmortyapi.com/documentation/#get-a-single-location
 */

import { useEffect, useState } from 'react'
import  './App.css'
import useFetch from './assets/hooks/useFetch'
import getRandomNumber from './assets/services/getRandomNumber'

import LocationInfo from './Components/LocationInfo'
import ResidentCard from './Components/ResidentCard'
import FormSearch from './Components/FormSearch.jsx'



function App ()  {

  const randomLocation = getRandomNumber(126)
const [locationSelected, setLocationSelected] =useState(randomLocation)

  
  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`
  const [location, getLocation, hasError] = useFetch(url)

useEffect(() => {
  getLocation()
}, [locationSelected])



  return (
    <div className='app'>
      <img className='app__img' src="./src/assets/rickandmorty.png" />
      
      <h1 className='app__title'>Rick and Morty</h1>
      <FormSearch 
        setLocationSelected={setLocationSelected}
      />
      {
        hasError
        ?(<h2 className='app__error'>Hey solo debes colocar numero del 1 al 126</h2>
       ) :(
      <>
      <LocationInfo
        location={location}
      />
      
      <div className='container__resident'>
        {
          location?.residents.map(url => (
           <ResidentCard
            key={url}
            url={url}

           />

          ) )
        }
      </div>

      </>
        )
      }
    </div>
  )
}


export default App
