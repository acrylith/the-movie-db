import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/SearchResult'
import { getMovieSearch, getTVSearch } from '../redux/asynch/getSearchResult';

export default function SearchPage() {
  const [ searchValue, setSearchValue ] = useState()
  const result = useSelector(state => state.searchResult);

  return (
    <section className='search'>
      <div className='container'>
        <SearchInput setSearchValue={setSearchValue} />

        <Tabs>
          <TabList>
            <Tab>Movies</Tab>
            <Tab>TV Shows</Tab>
          </TabList>

          <TabPanel>
            {searchValue ? <SearchResult searchRequest={searchValue} get={getMovieSearch} searchResult={result.movie} type='movie' /> : null}
          </TabPanel>
          <TabPanel>
            {searchValue ? <SearchResult searchRequest={searchValue} get={getTVSearch} searchResult={result.tv} type='tv' /> : null}
          </TabPanel>
        </Tabs>      
      </div>
    </section>
  )
}