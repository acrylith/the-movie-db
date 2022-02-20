import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { getMovieInfo } from '../redux/asynch/getMovieInfo';

export default function MoviePage() {
    const params = useParams();
    const dispatch = useDispatch();
    const movieInfo = useSelector(state => state.moviePage.info)
    const crew = useSelector(state => state.moviePage.crew)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMovieInfo(params.movieId))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Table = () => {
        const getDirector = (crew) => {
            let result = crew.filter(item => item.job === 'Director');
            return result.map(item => {return <span key={item.id}>{item.name}</span>})
        }

        return(
            <table className='movie__table'>
                <tbody>
                    <tr>
                        <th>Vote:</th>
                        <td className='vote'>{movieInfo.vote_average} <span>({movieInfo.vote_count})</span></td>
                    </tr>
                    <tr>
                        <th>Release date:</th>
                        <td>{dayjs(movieInfo.release_date).format('D MMMM YYYY')}</td>
                    </tr>
                    <tr>
                        <th>Production countries:</th>
                        <td>
                            {movieInfo.production_countries ?
                                movieInfo.production_countries.map(item => {return <span key={item.iso_3166_1}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Genres:</th>
                        <td>
                            {movieInfo.genres ?
                                movieInfo.genres.map(item => {return <span key={item.id}>{item.name}</span>})
                            :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Directed by:</th>
                        <td>
                            {crew.crew ? getDirector(crew.crew) :null}
                        </td>
                    </tr>
                    <tr>
                        <th>Runtime:</th>
                        <td>{movieInfo.runtime} minutes</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const displayActor = (item) => {
        return(
        <SwiperSlide key={item.id}>
            <div className='actor__card'>
                <div className='actor__body'>
                    <div className='actor__image-wrapper'>
                        {item.profile_path ?
                            <img
                                className='actor__image'
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`} alt={item.name}
                            /> :
                            <img
                                className='actor__image'
                                src={`https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=612x612&w=0&h=MOvSM2M1l_beQ4UzfSU2pfv4sRjm0zkpeBtIV-P71JE=`} alt={item.name}
                            /> 
                        }
                    </div>
                </div>
                <div className='actor__title'>
                    <h4 className='actor__name'>{item.name}</h4>
                    <p className='actor__role'>{item.character}</p>
                </div>
            </div>
        </SwiperSlide>
        )
    }

    return (
        <section className='movie-page'>
            <div className='container'>
                <div className='movie'>
                    <div className='movie__header'>
                        <span className='movie__back' onClick={() => navigate(-1)}>&#5130; Back</span>
                        <h2 className='movie__title'>{movieInfo.title}</h2>
                    </div>
                    <div className='movie__body'>
                        <div className='row justify-content-center'>

                            <div className='col-xl-4'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-xl-12'>
                                        <div className='movie__poster'>
                                            <div className='movie__image-wrapper'>
                                                <img
                                                    className='movie__image'
                                                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieInfo.poster_path}`}
                                                    alt={movieInfo.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='col-xl-8'>
                                <div className='row'>
                                    <div className='col-xl-10'>
                                        <div className='movie__info'>
                                            <Table />
                                            <div className='movie__cast'>
                                                <h3>Cast</h3>
                                                <Swiper
                                                    modules={[Navigation]}
                                                    slidesPerView={1}
                                                    spaceBetween={6}
                                                    navigation
                                                    breakpoints={{
                                                        576: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 6,
                                                        },
                                                        768: {
                                                          slidesPerView: 3,
                                                          spaceBetween: 12,
                                                        },
                                                        1200: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 18,
                                                        }
                                                    }}
                                                    className="mySwiper"
                                                >
                                                    {crew.cast ?
                                                        crew.cast.map(item => displayActor(item))
                                                        : <p>List is empty</p>
                                                    }
                                                </Swiper>
                                            </div>
                                            <div className='movie__overview'>
                                                <h3>Overview</h3>
                                                <p>{movieInfo.overview}</p>
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
