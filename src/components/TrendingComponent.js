import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import LoadSpinner from './LoadSpinner';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function TrendingComponent(props) {
    const { data, type } = props; 

    const displayCard = (item, index) => {
        return(
            <SwiperSlide key={index}>
                <Card className='card'>
                    <CardBody className='card__body'>
                        <Vote className='card__tag vote'>
                            <i className='ic-star' />{item.vote_average.toFixed(1)}
                        </Vote>
                        <CardImage className='card__image-wrapper'>
                            <LazyLoadImage
                                className='card__image'
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                                palaceholder={<h3>Loading...</h3>}
                                effect="blur"
                                alt={
                                    type === 'movie' ? item.title: type === 'tv' ? item.name : "poster"
                                }
                            />
                        </CardImage>
                        <Year className='card__tag year'>
                            {
                                type === 'movie' ? dayjs(item.release_date).format('YYYY') :
                                type === 'tv' ? dayjs(item.first_air_date).format('YYYY') : null
                            }
                        </Year>
                    </CardBody>
                    <CardTitle className='card__title'>
                        {
                            type === 'movie' ? <Link to={`/the-movie-db/movie/${item.id}`}>{item.title}</Link> :
                            type === 'tv' ? <Link to={`/the-movie-db/TVseries/${item.id}`}>{item.name}</Link> : null
                        }
                    </CardTitle>
                </Card>
            </SwiperSlide>
        )
    }

    return (
        <div className='trending movies'>
            <Title className='trending__title'>
                Trending {
                    type === 'movie' ? <span>Movies</span>:
                    type === 'tv' ? <span>TV Shows</span> : null
                }
            </Title>
            <div className='trending__list'>
                {data.isLoading === true ?
                    <LoadSpinner /> :
                    data.error !== null ?
                    <h2>{data.error}</h2> :
                    <StyledSwiper
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
                    >
                        {data.list.results ? 
                            data.list.results.map((item, index) => displayCard(item, index))
                            : null
                        }
                    </StyledSwiper>
                }
                
            </div>
        </div>
    )
}

const Title = styled.h1`
    text-align: center;
    span {
        color: ${props => props.theme.main};
    }
`
const StyledSwiper = styled(Swiper)`
    .swiper-button-prev, .swiper-button-next {
        &::after {
            border-radius: 4px;
            font-family: 'icomoon';
            background-color: rgba(36, 36, 36, 0.7) !important;
            padding: 6px;
            color: ${props => props.theme.main};
        }
    }

    .swiper-button-prev {
        &::after {
            content: "\f104" !important;
        }
    }

    .swiper-button-next {
        &::after {
            content: "\f105" !important;
        }
    }

    .swiper-slide {
        height: auto;
    }
`
const Card = styled.div`
    border: 2px solid ${props => props.theme.text};
    border-radius: 14px;
    padding: 8px;
    margin-bottom: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CardBody = styled.div`
    position: relative;
`
const CardImage = styled.div`
    border-radius: 12px;
    overflow: hidden;
    img {
        width: 100%;
    }
`
const CardTitle = styled.h3`
    // height: 2em;
    flex-grow: 1;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        color: ${props => props.theme.text};
        text-decoration: none;
        transition: all .3s;
        &:hover {
            color: ${props => props.theme.main};
        }
    }
`
const Tag = styled.span`
    position: absolute;
    z-index: 2;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: default;
`
const Vote = styled(Tag)`
    top: 8px;
    left: 8px;
    background-color: chocolate;
    i {
        margin-right: 4px;
    }
`
const Year = styled(Tag)`
    bottom: 8px;
    right: 8px;
    background-color: deepskyblue;
`