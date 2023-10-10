import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header>
                <div className="navegacion">
                    <div className="container mx-auto">
                        <div className="row justify-content-center justify-content-md-between align-items-center py-4">
                            <div className="flex justify-between">
                                <a href="/"> <img src="/img/logo.svg" alt="sitio logo" /></a>

                                <nav className="mt-16  mt-md-0 nav">

                                    <Link to="/AboutMe" className='mx-4'>About Me</Link>
                                    <Link to="/Projects" className='mx-4'>My Projects</Link>
                                    <Link to="/ContactMe" className='mx-4' >Contact Me</Link>
                                    
                                </nav>
                            </div>
                            <div className="col-md-8 flex justify-end">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
