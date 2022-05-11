import React, { useState } from 'react'

export default function SearchInput (props) {
    const [input, setInput] = useState("")

    const formatSearch = (input) => {
        setInput(input.replace(/\s/g, '%20'));
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
                <div className='search__field'>
                    <input
                        className="search__input"
                        type="text"
                        onChange={(e) => formatSearch(e.target.value)}
                    />
                    <button className="search__button" onClick={() => props.setSearchValue(input)}></button>
                </div>
            </div>
        </div>
    )
}