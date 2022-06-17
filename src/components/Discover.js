import React, { useState } from 'react'
import GenreTab from './GenreTab'
import SearchResult from './SearchResult'

export default function Discover(props) {  
    const [ request, setRequest ] = useState([])
    return (
        <div className='discover'>
            <GenreTab get={props.getGenres} genres={props.genres} request={request} set={setRequest} />
            {
                request.length !== 0 ?
                    <SearchResult searchRequest={request} get={props.getDiscover} searchResult={props.result} type={props.type} />:
                null
            }
        </div>
    )
}