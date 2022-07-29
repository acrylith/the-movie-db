import React from 'react'
import styled from 'styled-components'
import { usePagination, DOTS } from './usePagination'

export default function Pagination(props) {
    const { onPageChange, totalPageCount, currentPage } = props
    const paginationRange = usePagination({currentPage, totalPageCount})
    console.log(paginationRange)

    let lastPage = paginationRange !== undefined && paginationRange.length > 2 ? paginationRange[paginationRange.length - 1] : 1

    const onPrev = () => {
        onPageChange(currentPage - 1)
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }
    return (
        <Pag className='pagination'>
            <Page
                className='pagination__item'
                onClick={() => onPrev()}
                disabled={currentPage === 1 ? true : false}
            >
                <i className='ic-caret-left' />
            </Page>
            {paginationRange !== undefined ? paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <Page key={pageNumber}>{pageNumber}</Page>
                } else {
                    return (
                        <Page
                            key = {pageNumber}
                            className = 'pagination__item'
                            disabled = {pageNumber === currentPage ? true : false}
                            onClick = {() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </Page>
                    )
                }
            }) : null}
            <Page
                className='pagination__item'
                onClick={() => onNext()}
                disabled={currentPage === lastPage ? true : false}
            >
                <i className='ic-caret-right' />
            </Page>
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