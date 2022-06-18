import React from 'react'
import { Link as RLink, NavLink as RNavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
    return (
        <Navi>
            <div className='desktop'>
                <div className='container'>
                    <Navbar className='navbar'>
                        <Brand to='/the-movie-db' className='navbar__brand'>
                            <i className='ic-logo'/><i className='ic-logo-text'/>
                        </Brand>
                        <Navigation className='navbar__navigation'>
                            <Link
                                className='navbar__link'
                                to='/the-movie-db/search'
                            >
                                <i className="ic-search" /> Search
                            </Link>
                            <Link
                                className='navbar__link'
                                to='/the-movie-db/discover'
                            >
                            <i className='ic-globe' /> Discover
                            </Link>
                        </Navigation>
                    </Navbar>
                </div>
            </div>
            <div className='mobile'>
                <Mob className='mob'>
                    <div className='mob__item'>
                        <MobLink className='mob__link' to='/the-movie-db/search'>
                            <i className="ic-search" />Search
                        </MobLink>
                    </div>
                    <div className='mob__item'>
                        <HomeLink className='mob__link' to='/the-movie-db' end>
                            <i className='ic-logo'/>
                        </HomeLink>
                    </div>
                    <div className='mob__item'>
                        <MobLink className='mob__link' to='/the-movie-db/discover'>
                            <i className='ic-globe' />Discover
                        </MobLink>
                    </div>
                </Mob>
            </div>
            
        </Navi>
    )
}

const Brand = styled(RLink)`
    color: #faebd7;
    font-weight: bold;
    text-decoration: none;
    font-size: 28px;
    margin: 0.5em 0;
    i:first-of-type {
        color: #ff4500;
        margin-right: 12px;
    }
`

const Link = styled(RNavLink)`
    color: #faebd7;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    transition: all .3s;
    &:hover {
        color: #ff4500;
    }
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .active {
        color: #ff4500;
    }
`

const Navigation = styled.div`
    display: flex;
    gap: 16px;
`

const Navi = styled.div`
    background-color: rgb(36, 36, 36);
    margin-bottom: 24px;

    .mobile {
        display: none;
    }

    @media (max-width: 767px) {
        position: fixed;
        width: 100%;
        z-index: 10000;
        margin: 0;
        bottom: 0;

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }
    }
`

const Mob = styled.div`
    margin: 12px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5em;

    .active {
        color: #ff4500;
    }
`

const MobLink = styled(RNavLink)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: #faebd7;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
`

const HomeLink = styled(MobLink)`
    font-size: 42px;    
`