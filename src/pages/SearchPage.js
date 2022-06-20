import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import styled from 'styled-components';
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
          <StyledTabList>
            <StyledTab>Movies</StyledTab>
            <StyledTab>TV Shows</StyledTab>
          </StyledTabList>

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

const StyledTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 0;
  .react-tabs__tab--selected {
    color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
    cursor: default;
  }
`
const StyledTab = styled(Tab)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  border-radius: 18px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
      color: ${props => props.theme.main};
      border-color: ${props => props.theme.main};
  }
`