import React from 'react'
import styled from 'styled-components'

export default function Pagination(props) {

    const RenderButtons = () => {
        let content = [];
        for(let i = 1; i <= 10; i++) {
            content.push(
                <Page
                    className='pagination__item'
                    key={i}
                    onClick={() => props.set(i)}
                    disabled={i === props.current ? true : false}>
                        {i}
                </Page>
            )
        }
        return content
    }
    return (
        <Pag className='pagination'>
            <RenderButtons />
        </Pag>
    )
}

const Pag = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 12px;
`
const Page = styled.button`
    background-color: transparent;
    color: ${props => props.theme.main};
    font-size: 18px;
    line-height: 18px;
    border: none;
    cursor: pointer;
    transition: all .5s;
    &:hover {
        color: ${props => props.theme.text};
    }
    &:disabled {
        color: lightgray;
        font-size: 20px;
        cursor: default;
    }
`