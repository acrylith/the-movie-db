import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadSpinner from './LoadSpinner';
import MoviePad from './MoviePad';
import Pagination from './Pagination';

export default function SearchResult(props) {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.get(props.searchRequest, page))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchRequest, page])

    return (
        <div className='search__results'>
            <div className='search__movies'>
                <div className='row wrap'>
                    {
                        props.searchResult.isLoading === true ? <LoadSpinner /> :
                        props.searchResult.error !== null ? <h2>{props.searchResult.error}</h2>:
                        props.searchResult.data.request === [] ? <h2>Bad search request</h2>:
                        props.searchResult.data.results ? props.searchResult.data.results.map(item => <MoviePad key={item.id} item={item} type={props.type} />) : null
                    }
                </div>
            </div>
            <Pagination current={page} set={setPage} total={props.searchResult.data.total_pages} />
        </div>
    )
}
