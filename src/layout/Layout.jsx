import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout() {
    return (
            <div >
                <Header />
                <div className="outlet">
                    <Outlet />
                </div>
                <Footer />
            </div>
    )
}

export default Layout