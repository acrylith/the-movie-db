import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import SearchMoviesResult from '../components/SearchMoviesResult'
import SearchTVResult from '../components/SearchTVResult'

export default function SearchPage() {
  const [ searchValue, setSearchValue ] = useState()

  return (
    <section className='search'>
      <div className='container'>
        <SearchInput setSearchValue={setSearchValue} />
        
        {searchValue?
          <div>
            <SearchMoviesResult searchRequest={searchValue} />
            <SearchTVResult searchRequest={searchValue} />
          </div>: null
        }
        
      </div>
    </section>
  )
}