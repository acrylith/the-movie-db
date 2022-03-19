import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { getSeriesInfo } from '../redux/asynch/getSeriesInfo';

export default function SeriesPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const seriesInfo = useSelector(state => state.seriesPage.info);
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getSeriesInfo(params.TVId))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(seriesInfo);

    const Table = () => {
        // const getDirector = (crew) => {
        //     let result = crew.filter(item => item.job === 'Director');
        //     return result.map(item => {return <span key={item.id}>{item.name}</span>})
        // }

        return(
            <table className='movie__table'>
                <tbody>
                    <tr>
                        <th>Vote:</th>
                        <td className='vote'>{seriesInfo.vote_average} <span>({seriesInfo.vote_count})</span></td>
                    </tr>
                    <tr>
                        <th>First air date:</th>
                        <td>{dayjs(seriesInfo.first_air_date).format('D MMMM YYYY')}</td>
                    </tr>
                    <tr>
                        <th>Production countries:</th>
                        <td>
                            {seriesInfo.production_countries ?
                                seriesInfo.production_countries.map(item => {return <span key={item.iso_3166_1}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Genres:</th>
                        <td>
                            {seriesInfo.genres ?
                                seriesInfo.genres.map(item => {return <span key={item.id}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Directed by:</th>
                        <td>
                            {/* {crew.crew ? getDirector(crew.crew) :null} */}
                        </td>
                    </tr>
                    <tr>
                        <th>Last episode:</th>
                        <td>
                        {seriesInfo.last_episode_to_air ?
                            dayjs(seriesInfo.last_episode_to_air.air_date).format('D MMMM YYYY')
                        :null}
                        (episode {seriesInfo.last_episode_to_air ?
                            seriesInfo.last_episode_to_air.episode_number
                        :null})
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
    
    return (
        <section className='series-page'>
            <div className='container'>
                <div className='movie'>
                    <div className='movie__header'>
                        <span className='movie__back' onClick={() => navigate(-1)}>&#5130; Back</span>
                        <h2 className='movie__title'>{seriesInfo.name}</h2>
                    </div>
                    <div className='movie__body'>
                        <div className='row justify-content-center'>

                            <div className='col-xl-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-xl-12'>
                                        <div className='movie__poster'>
                                            <div className='movie__image-wrapper'>
                                                <img
                                                    className='movie__image'
                                                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${seriesInfo.poster_path}`}
                                                    alt={seriesInfo.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='col-xl-9'>
                                <div className='row'>
                                    <div className='col-xl-10'>
                                        <div className='movie__info'>
                                            <Table />
                                            <div className='movie__overview'>
                                                <h3>Overview</h3>
                                                <p>{seriesInfo.overview}</p>
                                            </div>
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
