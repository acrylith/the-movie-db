import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import ActorSlider from '../components/ActorSlider';
import LoadSpinner from '../components/LoadSpinner';
import { getSeriesInfo } from '../redux/asynch/getSeriesInfo';
import styled from 'styled-components';

export default function SeriesPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const seriesInfo = useSelector(state => state.seriesPage.info);
    const seriesCrew = useSelector(state => state.seriesPage.crew);
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getSeriesInfo(params.TVId))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Info = (props) => {
        const {data} = props;

        return(
            <Table className='movie__table'>
                <tbody>
                    <tr>
                        <th>Vote:</th>
                        <Vote className='vote'>{data.vote_average} <span>({data.vote_count})</span></Vote>
                    </tr>
                    <tr>
                        <th>First air date:</th>
                        <td>{dayjs(data.first_air_date).format('D MMMM YYYY')}</td>
                    </tr>
                    <tr>
                        <th>Production countries:</th>
                        <td>
                            {data.production_countries ?
                                data.production_countries.map(item => {return <span key={item.iso_3166_1}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Genres:</th>
                        <td>
                            {data.genres ?
                                data.genres.map(item => {return <span key={item.id}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Created by:</th>
                        <td>
                            {data.created_by ?
                                data.created_by.map(item => {return <span key={item.id}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Last episode:</th>
                        <td>
                        {data.last_episode_to_air ?
                            dayjs(data.last_episode_to_air.air_date).format('D MMMM YYYY')
                        :null}
                        (episode {data.last_episode_to_air ?
                            data.last_episode_to_air.episode_number
                        :null})
                        </td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>
                            {
                                data.in_production === true ?
                                    "Production":
                                data.in_production === false ?
                                    "Ended":
                                null
                            }
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    
    return (
        <section className='series-page'>
            <div className='container'>
                <div className='movie'>
                    <Header className='movie__header'>
                        <BackLink className='movie__back' onClick={() => navigate(-1)}><i className='ic-angle-left'/> Back</BackLink>
                        <h2 className='movie__title'>{seriesInfo.data.name}</h2>
                    </Header>
                    <div className='movie__body'>
                        <div className='row justify-content-center'>

                            <div className='col-xl-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-xl-12'>
                                        <div className='movie__poster'>
                                            <div className='movie__image-wrapper'>
                                                {
                                                    seriesInfo.isLoading === true ? <LoadSpinner />:
                                                    seriesInfo.error !== null ? <h2>{seriesInfo.error}</h2>:
                                                    <img
                                                        className='movie__image'
                                                        style={{width: "100%"}}
                                                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${seriesInfo.data.poster_path}`}
                                                        alt={seriesInfo.data.name}
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
                                            {
                                                seriesInfo.isLoading === true ?
                                                    <LoadSpinner />:
                                                seriesInfo.error !== null ?
                                                    <h2>{seriesInfo.error}</h2>:
                                                    <Info data={seriesInfo.data} />
                                            }

                                            {
                                                seriesCrew.isLoading === true ?
                                                    <LoadSpinner />:
                                                seriesCrew.error !== null ?
                                                    <h2>{seriesCrew.error}</h2>:
                                                    <ActorSlider actors={seriesCrew.data.cast} />
                                            }

                                            {
                                                seriesInfo.isLoading !== true && seriesInfo.error === null ?
                                                    <div className='movie__overview'>
                                                        <h3>Overview</h3>
                                                        <p>{seriesInfo.data.overview}</p>
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