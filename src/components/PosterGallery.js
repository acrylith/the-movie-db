import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { getGallery } from '../redux/asynch/getGallery';
import LoadSpinner from './LoadSpinner'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "swiper/css";
import "swiper/css/lazy";
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function PosterGallery(props) {
    const dispatch = useDispatch()
    const galleryData = useSelector(state => state.gallery.data)
    const isLoading = useSelector(state => state.gallery.isLoading)
    useEffect(() => {
        dispatch(getGallery(props.type, props.id))
    }, [])

    const wrapperStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const createSlide = (poster) => {
        return (
            <SwiperSlide key={poster.file_path}>
                <div style={wrapperStyles}>
                    <LazyLoadImage
                        src={`https://image.tmdb.org/t/p/w400${poster.file_path}`}
                        palaceholder={<h3>Loading...</h3>}
                        effect="blur"
                        alt="poster"
                    />
                </div>
            </SwiperSlide>
        )
    }
    
    return (
        <Modal>
            <CloseButton onClick={() => props.toggle(false)}>X</CloseButton>
            {isLoading === true ?
                <LoadSpinner /> :
                <StyledSwiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination = {{type: "fraction"}}
                    speed={1}
                    allowTouchMove={false}
                >
                    {galleryData.posters !== undefined && galleryData.posters.length !== 0 ?
                        galleryData.posters.map(item => createSlide(item))
                        : <Empty>Empty</Empty>
                    }
                </StyledSwiper>
            }
            
        </Modal>
    )
}

const Modal = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
`

const StyledSwiper = styled(Swiper)`
    .swiper-pagination-horizontal {
        position: absolute;
        z-index: 1001;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        padding: 6px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        cursor: default;
    }

    .swiper-button-prev, .swiper-button-next {
        &::after {
            border-radius: 4px;
            font-family: 'icomoon';
            background-color: rgba(36, 36, 36, 0.7) !important;
            padding: 6px;
            color: ${props => props.theme.main};
        }
    }

    .swiper-button-prev {
        left: 20px;
        &::after {
            content: "\f104" !important;
        }
    }

    .swiper-button-next {
        right: 20px;
        &::after {
            content: "\f105" !important;
        }
    }
`
const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px 20px 20px 20px;
    color: white;
    border: none;
    border-radius: 0 0 0 70%;
    transition: all .5s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.main};
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const Empty = styled.h3`
    position: relative;
    z-index: 1002;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
    padding: 12px;
    margin: 12px 0 0 0;
    border-radius: 14px;
    text-align: center;
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.text}
`