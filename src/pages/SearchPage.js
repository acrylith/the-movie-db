import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchMoviesResult from '../components/SearchMoviesResult'

export default function SearchPage() {
  const [ searchValue, setSearchValue ] = useState()
  const navigate = useNavigate()

  let formatedSearch = ""

  const formatSearch = (input) => {
    formatedSearch = input.replace(/\s/g, '%20');
  }

  return (
    <section className='search'>
      <div className='container'>
        <div className='search__header'>
          <span className='search__back' onClick={() => navigate(-1)}>&#5130; Back</span>
          <div className='search__field'>
            <input
              className="search__input"
              type="text"
              onChange={(e) => formatSearch(e.target.value)}
            />
            <button className="search__button" onClick={() => setSearchValue(formatedSearch)}>

            </button>
          </div>
        </div>
        
        <SearchMoviesResult searchRequest={searchValue} />
      </div>
    </section>
  )
}
