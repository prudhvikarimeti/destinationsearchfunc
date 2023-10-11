import DestinationItem from '../DestinationItem'

import React from 'react'
import { useState } from 'react'
import './index.css'

function DestinationSearch(props) {
    const [searchInput,setState]=useState('');


    
    const {destinationsList}=props

    const  searchItems=(searchValue)=>{
setState(searchValue)
    }

    const searchResults = destinationsList.filter(eachDestination =>
        eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
      )

  return (
    <div className='main-container'>
    <div className='search-container'>
        <h1 className='heading'>Destination Search</h1>
        <div className='search-input-container'>
            <input 
            type="input"
            placeholder='Search'
            value={searchInput}
            className='search-input'
            onChange={(e)=>searchItems(e.target.value)}/>
            <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className='search-icon'/>
        </div>
        <ul className='destinations-list'>
            {searchResults.map(eachDestination=>(
                <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}/>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default DestinationSearch
