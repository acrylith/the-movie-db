import React from 'react'
import { Outlet } from 'react-router';
import Nav from '../components/Nav'

export default function Layout() {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}
