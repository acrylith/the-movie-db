import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

export default function ActorSlider (props) {
    const {actors} = props;
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
                {actors ?
                    actors.map(item => displayActor(item))
                    : <p>List is empty</p>
                }
            </Swiper>
        </div>
    )
}
