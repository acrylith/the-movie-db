import React, { useState } from 'react'
import styled from 'styled-components';

export default function SearchInput (props) {
    const [input, setInput] = useState("")

    const formatSearch = (input) => {
        setInput(input.replace(/\s/g, '%20'));
    }

    const search = (e) => {
        e.preventDefault();
        props.setSearchValue(input)
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-xs-10 col-md-6 col-lg-4'>
                <form style={{position: 'relative'}} className='search__field' onSubmit={(e) => search(e)}>
                    <Input
                        className="search__input"
                        type="text"
                        onChange={(e) => formatSearch(e.target.value)}
                    />
                    <Submit className="search__button" type='submit'>
                        <i className='ic-search' />
                    </Submit>
                </form>
            </div>
        </div>
    )
}

const Input = styled.input`
    width: 100%;
    font-size: 24px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.text};
    border-radius: 24px;
    padding: 0px 12px;
    color: ${props => props.theme.text};
`
const Submit = styled.button`
    position: absolute;
    right: 4px;
    height: 100%;
    padding: 0 8px;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: ${props => props.theme.main};
    }
`