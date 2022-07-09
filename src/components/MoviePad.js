import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

export default function MoviePad(props) {
    return (
        <div className='col-lg-6'>
            <Board className='board'>
                <div className='row'>
                    <div className='col-4'>
                        <Image className='board__image-wrapper'>
                            {props.item.poster_path ?
                                <LazyLoadImage
                                    className='board__image'
                                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.item.poster_path}`}
                                    palaceholder={<h3>Loading...</h3>}
                                    effect="blur"
                                    alt={
                                        props.type === 'movie' ? props.item.title:
                                        props.type === 'tv' ? props.item.name: 'undefined'
                                    }
                                />
                                :
                                <LazyLoadImage
                                    className='board__image'
                                    src={`https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg`}
                                    palaceholder={<h3>Loading...</h3>}
                                    effect="blur"
                                    alt={
                                        props.type === 'movie' ? props.item.title:
                                        props.type === 'tv' ? props.item.name: 'undefined'
                                    }
                                />
                            }
                        </Image>
                    </div>
                    <div className='col-8'>
                        <Info className='board__info'>
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
                                    <StyledLink
                                        className='board__link'
                                        to={
                                                props.type === 'movie' ? `../movie/${props.item.id}`:
                                                props.type === 'tv' ? `../TVseries/${props.item.id}`: null
                                            }
                                        >
                                        Read more<i className='ic-angle-right' />
                                    </StyledLink>
                                </span>
                            </p>
                        </Info>
                    </div>
                </div>
            </Board>
        </div>
    )
}

const Board = styled.div`
    padding: 12px;
    margin-bottom: 24px;
`
const Image = styled.div`
    border-radius: 14px;
    overflow: hidden;
    img {
        width: 100%;
    }
`
const Info = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column
`
const StyledLink = styled(Link)`
    color: ${props => props.theme.main};
    text-decoration: none;
    transition: all .3s;
    &:hover {
        color: ${props => props.theme.text};
    }

    i {
        margin-left: 6px;
    }
`