import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrendingComponent from '../components/TrendingComponent';
import { getTrendingMovies, getTrendingTV } from '../redux/asynch/getTrending';

export default function Home() {
  const dispatch = useDispatch()
  const trending = useSelector(state => state.trending);

  useEffect(() => {
    dispatch(getTrendingMovies())
    dispatch(getTrendingTV())// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

  return (
    <section className='home'>
        <div className='container'>
            <TrendingComponent type='movie' data={trending.movies} />
            <TrendingComponent type='tv' data={trending.tv} />
        </div>
    </section>
  )
}
