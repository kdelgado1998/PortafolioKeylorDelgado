import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header>
                <div className="navegacion">

                    <div className='img-header'>
                        <a href="/"> <img src="/img/logo.svg" alt="sitio logo" /></a>
                    </div>

                    <div className='flex-links'>
                        <nav className="nav-links">
                            <Link to="/AboutMe" className='mx-4'>About Me</Link>
                            <Link to="/Projects" className='mx-4'>My Projects</Link>
                            <Link to="/ContactMe" className='mx-4' >Contact Me</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
