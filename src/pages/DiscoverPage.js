import React from 'react'
import Discover from '../components/Discover'
import { getMoviesDiscover, getTvDiscover } from '../redux/asynch/getDiscover';
import { getMovieGenres, getTvGenres } from '../redux/asynch/getGenres';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export default function DiscoverPage () {
    const result = useSelector(state => state.discoverResult)

    return (
        <section className='discover'>
            <div className='container'>
                <Tabs>
                    <TabList>
                        <Tab>Movies</Tab>
                        <Tab>TV Shows</Tab>
                    </TabList>

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