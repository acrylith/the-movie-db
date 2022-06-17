import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviePad(props) {
    return (
        <div className='col-lg-6'>
            <div className='board'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='board__image-wrapper'>
                            {props.item.poster_path ?
                                <img
                                    className='board__image'
                                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.item.poster_path}`}
                                    alt={
                                        props.type === 'movie' ? props.item.title:
                                        props.type === 'tv' ? props.item.name: 'undefined'
                                    }
                                /> :
                                <img
                                    className='board__image'
                                    src={`https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg`}
                                    alt={
                                        props.type === 'movie' ? props.item.title:
                                        props.type === 'tv' ? props.item.name: 'undefined'
                                    }
                                />
                            }
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='board__info'>
                        <h3 className='board__title'>
                        {
                            props.type === 'movie' ? props.item.title:
                            props.type === 'tv' ? props.item.name: null
                        }
                        </h3>
                        <p className='board__overview'>
                            {props.item.overview.slice(0, 150)}
                            <span>
                                ...
                                <Link
                                    className='board__link'
                                    to={
                                            props.type === 'movie' ? `/the-movie-db/movie/${props.item.id}`:
                                            props.type === 'tv' ? `/the-movie-db/TVseries/${props.item.id}`: null
                                        }
                                    >
                                    Read more
                                </Link>
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
