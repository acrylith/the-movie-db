import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <div className='navbar'>
                    <h1 className='navbar__brand'>Wicked<span>Movies</span></h1>
                    <div className='navbar__navigation'>
                        <Link className='navbar__link' to='/the-movie-db'>Home</Link>
                        <Link className='navbar__link' to='/the-movie-db/search'>Search</Link>
                        <Link className='navbar__link' to='/the-movie-db/discover'>Discover</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
