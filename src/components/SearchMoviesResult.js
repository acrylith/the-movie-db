import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieSearch } from '../redux/asynch/getSearchResult';
import { Link as ScrollLink } from 'react-scroll';
import LoadSpinner from './LoadSpinner';

export default function SearchMoviesResult(props) {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const searchResult = useSelector(state => state.searchResult.movie);

    useEffect(() => {
        dispatch(getMovieSearch(props.searchRequest, page))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchRequest, page])

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
                        <p className='board__overview'>
                            {item.overview.slice(0, 150)}<span>...<Link className='board__link' to={`/the-movie-db/movie/${item.id}`}>Read more</Link></span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    const Pagination = () => {
        let content = [];
        for(let i = 1; i <= searchResult.data.total_pages; i++) {
            content.push(
                <button
                    className='pagination__item'
                    key={i}
                    onClick={() => setPage(i)}
                    disabled={i === page ? true : false}>
                        {i}
                </button>
            )
        }
        return content
    }

    return (
        <div className='search__results' id='movies-result'>
            <div className='search__heading'>
                <h2>Movies</h2>
                <ScrollLink 
                    to='TVs-result'
                    smooth='true'
                    duration={500}
                    offset={-34}
                    className='search__scroll'
                    activeClass='scroll-active'
                >
                    TV series &#9660;
                </ScrollLink>
            </div>
            
            <div className='search__movies'>
                <div className='row wrap'>
                    {
                        searchResult.isLoading === true ? <LoadSpinner /> :
                        searchResult.error !== null ? <h2>{searchResult.error}</h2>:
                        searchResult.data.request === [] ? <h2>Bad search request</h2>:
                        searchResult.data.results ? searchResult.data.results.map(item =>movieCard(item)) : null
                    }
                </div>
            </div>
            <div className='search__pagination pagination'>
                <Pagination />
            </div>
        </div>
    )
}
