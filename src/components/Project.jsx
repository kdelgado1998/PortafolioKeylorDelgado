import React from 'react'
import { db } from '../data/db'

export const Project = ({ proyecto, setProyecto, proyectos, setProyectos }) => {

    const { id, nombre, descripcion, link } = db;

    console.log(db)

    return (

        <main className='container mt-5'>
            <div className='row proximos-viajes'>
                <div className='col-md-6 col-lg-4 mb-4'>
                    <h2>nombre</h2>
                </div>
            </div>

        </main>
    )

}
