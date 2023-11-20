import React from 'react'

const fechaActual = new Date();
const annoActual = fechaActual.getFullYear();

export const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className='footer-grid'>
                    <div className="">
                        <nav className="nav ml-9">
                            <a className="nav-link m-1" href="/AboutMe">About Me</a>
                            <a className="nav-link m-1" href="/Projects">My Projects</a>
                            <a className="nav-link m-1" href="/ContactMe">Contact Me </a>
                        </nav>
                        
                    </div>
                    <div className="">
                        <p className="copyright text-center text-md-right">
                        All rights reserved - <span className='text-gray-400'>{annoActual}</span>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
