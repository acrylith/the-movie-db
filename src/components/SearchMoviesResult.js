import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getMovieSearch } from '../redux/asynch/getSearchResult'

export default function SearchMoviesResult(props) {
    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchResult.movie)

    useEffect(() => {
        dispatch(getMovieSearch(props.searchRequest))
    }, [props.searchRequest])

    const movieCard = (item) => {
        return(
        <div className='col-lg-6' key={item.id}>
            <div className='board'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='board__image-wrapper'>
                            {item.poster_path ?
                                <img
                                    className='board__image'
                                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                                    alt={item.title}
                                /> :
                                <img
                                    className='board__image'
                                    src={`https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg`}
                                    alt={item.title}
                                />
                            }
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='board__info'>
                        <h3 className='board__title'>{item.title}</h3>
                        <p className='board__overview'>{item.overview}</p>
                        <Link className='board__link' to={`/the-movie-db/movie/${item.id}`}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
      }

    return (
        <div className='search__results'>
            <div className='search__movies'>
            <div className='row wrap'>
                {searchResult.results?
                searchResult.results.map(item => movieCard(item))
                : <p>List is Empty</p>
                }
            </div>
            </div>
        </div>
    )
}
