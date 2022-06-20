import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styled from 'styled-components';

export default function ActorSlider (props) {
    const {actors} = props;
    const displayActor = (item) => {
        return(
        <SwiperSlide key={item.id}>
            <Card className='actor__card'>
                <CardBody className='actor__body'>
                    <CardImage className='actor__image-wrapper'>
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
                    </CardImage>
                </CardBody>
                <div className='actor__title' style={{textAlign: "center"}}>
                    <CardName className='actor__name'>{item.name}</CardName>
                    <CardRole className='actor__role'>{item.character}</CardRole>
                </div>
            </Card>
        </SwiperSlide>
        )
    }
    
    return (
        <div className='movie__cast' style={{marginTop: "24px"}}>
            <h3>Cast</h3>
            <StyledSwiper
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
                {actors ?
                    actors.map(item => displayActor(item))
                    : <p>List is empty</p>
                }
            </StyledSwiper>
        </div>
    )
}

const StyledSwiper = styled(Swiper)`
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
        &::after {
            content: "\f104" !important;
        }
    }

    .swiper-button-next {
        &::after {
            content: "\f105" !important;
        }
    }
`
const Card = styled.div`
    padding: 10px;
    cursor: default;
`
const CardBody = styled.div`
    display: flex;
    justify-content: center;
`
const CardImage = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const CardName = styled.h4`
    margin: 0.5em 0 1em 0;
    font-size: 18px;
`
const CardRole = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    color: gray;
`