import React from 'react'
import TrendingMoviesComponent from '../components/TrendingMoviesComponent'
import TrendingTVComponent from '../components/TrendingTVComponent'

export default function Home() {
  return (
    <section className='home'>
        <div className='container'>
            <TrendingMoviesComponent />
            <TrendingTVComponent />
        </div>
    </section>
  )
}
