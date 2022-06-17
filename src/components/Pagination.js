import React from 'react'

export default function Pagination(props) {

    const RenderButtons = () => {
        let content = [];
        for(let i = 1; i <= 10; i++) {
            content.push(
                <button
                    className='pagination__item'
                    key={i}
                    onClick={() => props.set(i)}
                    disabled={i === props.current ? true : false}>
                        {i}
                </button>
            )
        }
        return content
    }
    return (
        <div className='search__pagination pagination'>
            <RenderButtons />
        </div>
    )
}
