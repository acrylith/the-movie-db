import dayjs from 'dayjs';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { getTrendingMovies } from '../redux/asynch/getTrendingMovies';

import 'swiper/css';
import 'swiper/css/navigation';
import LoadSpinner from './LoadSpinner';

export default function TrendingMoviesComponent() {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(state => state.trending.movies);

    useEffect(() => {
        dispatch(getTrendingMovies())// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const displayCard = (item, index) => {
        return(
            <SwiperSlide key={index}>
                <div className='card'>
                    <div className='card__body'>
                        <span className='card__tag vote'>&#9734;{item.vote_average}</span>
                        <div className='card__image-wrapper'>
                            <img
                                className='card__image'
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                                alt={item.title}
                            />
                        </div>
                        <span className='card__tag year'>{dayjs(item.release_date).format('YYYY')}</span>
                    </div>
                    <h3 className='card__title'><Link to={`/the-movie-db/movie/${item.id}`}>{item.title}</Link></h3>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className='trending movies'>
            <h1 className='trending__title'>Trending <span>Movies</span></h1>
            <div className='trending__list'>
                {trendingMovies.isLoading === true ?
                    <LoadSpinner /> :
                    trendingMovies.error !== null ?
                    <h2>{trendingMovies.error}</h2> :
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={6}
                        navigation
                        breakpoints={{
                            576: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                            },
                            768: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                            },
                            1200: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                            }
                        }}
                        className="mySwiper"
                    >
                        {trendingMovies.list.results? 
                            trendingMovies.list.results.map((item, index) => displayCard(item, index))
                            : null
                        }
                    </Swiper>
                }
                
            </div>
        </div>
    )
}