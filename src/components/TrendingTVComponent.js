import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { getTrendingTV } from '../redux/asynch/getTrendingTV';
import LoadSpinner from './LoadSpinner';

export default function TrendingTVComponent() {
    const dispatch = useDispatch();
    const trendingTV = useSelector(state => state.trending.tv)

    useEffect(() => {
        dispatch(getTrendingTV())// eslint-disable-next-line react-hooks/exhaustive-deps
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
                                alt={item.name}
                            />
                        </div>
                    </div>
                    <h3 className='card__title'><Link to={`/the-movie-db/TVseries/${item.id}`}>{item.name}</Link></h3>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className='trending tv'>
            <h1 className='trending__title'>Trending <span>TV's</span></h1>
            <div className='trending__list'>
                {trendingTV.isLoading === true ?
                    <LoadSpinner />:
                trendingTV.error !== null ?
                    <h2>{trendingTV.error}</h2>:
                    <Swiper
                        modules={[Navigation]}
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
                        {trendingTV.list.results? 
                            trendingTV.list.results.map((item, index) => displayCard(item, index))
                            : <p>List is Empty</p>
                        }
                    </Swiper>
                }
                
            </div>
        </div>
    )
}
