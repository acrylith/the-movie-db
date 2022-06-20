import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
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
        <Checkboxes className='checkboxes'>
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
        </Checkboxes>
    )
}

const Checkboxes = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    label {
        padding: 2px 4px;
        border-radius: 4px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background-color: rgba(255, 68, 0, 0.4);
        }
    }

    input {
        display: none;
        &:checked + label {
            background-color: ${props => props.theme.main};
        }
    }
`