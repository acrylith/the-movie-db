import React from 'react'
import Discover from '../components/Discover'
import { getMoviesDiscover, getTvDiscover } from '../redux/asynch/getDiscover';
import { getMovieGenres, getTvGenres } from '../redux/asynch/getGenres';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export default function DiscoverPage () {
    const result = useSelector(state => state.discoverResult)

    return (
        <section className='discover'>
            <div className='container'>
                <Tabs>
                    <StyledTabList>
                        <StyledTab>Movies</StyledTab>
                        <StyledTab>TV Shows</StyledTab>
                    </StyledTabList>

                    <TabPanel>
                        <Discover type='movie' result={result.movie} genres={result.genre_movie} getDiscover={getMoviesDiscover} getGenres={getMovieGenres} />
                    </TabPanel>
                    <TabPanel>
                        <Discover type='tv' result={result.tv} genres={result.genre_tv} getDiscover={getTvDiscover} getGenres={getTvGenres} />
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