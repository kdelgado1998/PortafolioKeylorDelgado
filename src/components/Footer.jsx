import React from 'react'

const fechaActual = new Date();
const annoActual = fechaActual.getFullYear();

export const Footer = () => {
    return (
        <>

            <footer className="container py-5 flex justify-center">
                <div className="row flex gap-x-56">
                    <div className="col-md-6">
                        <nav className="nav footer justify-content-center justify-content-md-start">
                            <a className="nav-link m-3" href="/AboutMe">About Me</a>
                            <a className="nav-link m-3" href="/Projects">My Projects</a>
                            <a className="nav-link m-3" href="/ContactMe">Contact Me </a>
                        </nav>
                        
                    </div>
                    <div className="col">
                        <p className="copyright text-center text-md-right">
                        All rights reserved - <span className='text-gray-400'>{annoActual}</span>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
