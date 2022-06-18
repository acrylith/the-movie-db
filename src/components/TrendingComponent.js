import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import LoadSpinner from './LoadSpinner';
import styled from 'styled-components';

export default function TrendingComponent(props) {
    const { data, type } = props; 

    const displayCard = (item, index) => {
        return(
            <SwiperSlide key={index}>
                <Card className='card'>
                    <CardBody className='card__body'>
                        <Vote className='card__tag vote'>
                            <i className='ic-star' />{item.vote_average}
                        </Vote>
                        <CardImage className='card__image-wrapper'>
                            <img
                                className='card__image'
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
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
                        {data.list.results ? 
                            data.list.results.map((item, index) => displayCard(item, index))
                            : null
                        }
                    </Swiper>
                }
                
            </div>
        </div>
    )
}

const main = "#ff4500";
const secondary = "#faebd7";

const Title = styled.h1`
    text-align: center;
    span {
        color: ${main};
    }
`
const Card = styled.div`
    border: 2px solid ${secondary};
    border-radius: 14px;
    padding: 8px;
    margin-bottom: 24px;
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
    height: 2em;
    text-align: center;
    a {
        color: ${secondary};
        text-decoration: none;
        transition: all .3s;
        &:hover {
            color: ${main};
        }
    }
`
const Tag = styled.span`
    position: absolute;
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
`
const Year = styled(Tag)`
    bottom: 8px;
    right: 8px;
    background-color: deepskyblue;
`