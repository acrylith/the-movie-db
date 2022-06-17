import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadSpinner from './LoadSpinner';

export default function GenreTab(props) {
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(props.get())// eslint-disable-next-line
    }, [dispatch])
    const genres = props.genres

    const handleCheckboxChange = (data) => {
        const isChecked = props.request.includes(data)
        if (!isChecked) {
            props.set(props.request.concat(data))
        } else {
            props.set(props.request.filter(item => item !== data))
        }
    }

    return (
        <div className='checkboxes'>
            {genres.data.genres !== undefined ?
                genres.data.genres.map((item, index) => {
                    return(
                        <span key={`cb-${index}`}>
                            <input
                                type='checkbox'
                                id={item.id}
                                onChange={() => handleCheckboxChange(item.id)}
                                className='custom-checkbox'
                            />
                            <label htmlFor={item.id}>{item.name}</label>
                        </span>
                    )
                }):
                genres.isLoading === true ? <LoadSpinner /> : null
            }
        </div>
    )
}
