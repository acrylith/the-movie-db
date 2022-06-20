import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getMovieInfo } from '../redux/asynch/getMovieInfo';
import ActorSlider from '../components/ActorSlider';
import LoadSpinner from '../components/LoadSpinner';
import styled from 'styled-components';

export default function MoviePage(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const movieInfo = useSelector(state => state.moviePage.info)
    const crew = useSelector(state => state.moviePage.crew)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMovieInfo(params.movieId))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Info = () => {
        const getDirector = (crew) => {
            let result = crew.filter(item => item.job === 'Director');
            return result.map(item => {return <span key={item.id}>{item.name}</span>})
        }

        if(movieInfo.isLoading === true) {
            return <LoadSpinner />
        } if(movieInfo.error !== null) {
            return <h2>{movieInfo.error}</h2>
        } else {
            return(
                <Table className='movie__table'>
                    <tbody>
                        <tr>
                            <th>Vote:</th>
                            <Vote className='vote'>{movieInfo.data.vote_average} <span>({movieInfo.data.vote_count})</span></Vote>
                        </tr>
                        <tr>
                            <th>Release date:</th>
                            <td>{dayjs(movieInfo.data.release_date).format('D MMMM YYYY')}</td>
                        </tr>
                        <tr>
                            <th>Production countries:</th>
                            <td>
                                {movieInfo.data.production_countries ?
                                    movieInfo.data.production_countries.map(item => {return <span key={item.iso_3166_1}>{item.name}</span>})
                                :null}
                            </td>
                        </tr>
                        <tr>
                            <th>Genres:</th>
                            <td>
                                {movieInfo.data.genres ?
                                    movieInfo.data.genres.map(item => {return <span key={item.id}>{item.name}</span>})
                                :null}
                            </td>
                        </tr>
                        {crew.data.crew ?
                            <tr>
                                <th>Directed by:</th>
                                <td>
                                    {getDirector(crew.data.crew)}
                                </td>
                            </tr>: null
                        }
                        
                        <tr>
                            <th>Runtime:</th>
                            <td>{movieInfo.data.runtime} minutes</td>
                        </tr>
                    </tbody>
                </Table>
            )
        }
    }

    return (
        <section className='movie-page'>
            <div className='container'>
                <div className='movie'>
                    <Header className='movie__header'>
                        <BackLink className='movie__back' onClick={() => navigate(-1)}><i className='ic-angle-left'/> Back</BackLink>
                        <h2 className='movie__title'>{movieInfo.data.title}</h2>
                    </Header>
                    <div className='movie__body'>
                        <div className='row justify-content-center'>
                            <div className='col-xl-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-xl-12'>
                                        <div className='movie__poster'>
                                            <div className='movie__image-wrapper'>
                                                {
                                                    movieInfo.isLoading === true ? <LoadSpinner />:
                                                    movieInfo.error !== null ? <h2>{movieInfo.error}</h2>:
                                                    <img
                                                        className='movie__image'
                                                        style={{width: "100%"}}
                                                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieInfo.data.poster_path}`}
                                                        alt={movieInfo.data.title}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-9'>
                                <div className='row'>
                                    <div className='col-xl-10'>
                                        <div className='movie__info'>
                                            <Info />

                                            {movieInfo.isLoading === true ? <LoadSpinner />:
                                                movieInfo.error !== null ? <h2>{movieInfo.error}</h2>:
                                                <ActorSlider actors={crew.data.cast} />
                                            }
                                            
                                            {
                                                movieInfo.isLoading !== true && movieInfo.error === null ?
                                                    <div className='movie__overview'>
                                                        <h3>Overview</h3>
                                                        <p>{movieInfo.data.overview}</p>
                                                    </div>
                                                :null
                                            }
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h2 {
        text-align: center;
        @media (max-width: 576px) {
            width: 50%;
            font-size: 20px;
        }
    }
`

const BackLink = styled.span`
    position: absolute;
    left: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.main};
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: ${props => props.theme.text};
    }
`
const Table = styled.table`
    display: flex;
    @media (max-width: 1200px) {
        justify-content: center;
    }

    td {
        span {
            &::after {
                content: ", "
            }
            &:last-child::after {
                content: "";
            }
        }
    }

    th {
        width: 160px;
        text-align: start;
    }
`
const Vote = styled.td`
    font-weight: bolder;
    span {
        font-weight: 300;
        color: gray;
    }
`