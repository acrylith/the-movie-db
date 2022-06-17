import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className='desktop'>
                <div className='container'>
                    <div className='navbar'>
                        <Link to='/the-movie-db' className='navbar__brand'>
                            <i className='ic-logo'/><i className='ic-logo-text'/>
                        </Link>
                        <div className='navbar__navigation'>
                            <NavLink
                                className='navbar__link'
                                to='/the-movie-db/search'
                            >
                                <i className="ic-search" /> Search
                            </NavLink>
                            <NavLink
                                className='navbar__link'
                                to='/the-movie-db/discover'
                            >
                            <i className='ic-globe' /> Discover
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <div className='mob'>
                    <div className='mob__item'>
                        <NavLink className='mob__link' to='/the-movie-db/search'>
                            <i className="ic-search" />Search
                        </NavLink>
                    </div>
                    <div className='mob__item'>
                        <NavLink className='mob__link' to='/the-movie-db'>
                            <i className='ic-logo'/>
                        </NavLink>
                    </div>
                    <div className='mob__item'>
                        <NavLink className='mob__link' to='/the-movie-db/discover'>
                            <i className='ic-globe' />Discover
                        </NavLink>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
