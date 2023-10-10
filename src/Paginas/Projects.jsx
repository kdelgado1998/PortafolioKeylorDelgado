import React from 'react'
import { db } from '../data/db'
import { Project } from '../components/Project';

export const Projects = ({ proyecto, setProyecto, proyectos, setProyectos }) => {

  const { id, nombre, imagen, descripcion, link } = db;
  // console.log(db.nombre)

  return (

    <>
      <h1 className='flex justify-center mb-8'>Projects</h1>

      {db.map((project, index) => {
        return (
          <div className='row proximos-viajes border-lime-300' key={index}>
            {/* {console.log(project, index)} */}

            <div className='row col-auto flex justify-center'>
              <div className='mx-5 my-8 row'>
                <div className='flex justify-center'>
                  <h2 className='text-black my-3'>{project.nombre}</h2>
                </div>

                <div className='flex justify-center py-10'>
                  <img className='descuento2 border-gray-600 border- rounded-lg' src={"/img/" + project.imagen + ".jpg"} alt={"imagen proyecto " + project.nombre} />
                </div>
                <p className='font-bold text-lg bg-gray-200 px-4 py-2 mt-4 rounded-lg shadow-xl text-opacity-70 mx-96 text-center'>{project.descripcion}</p>

                <div className='flex justify-center'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 my-2 cursor-pointer'>See more</a>
                </div>

                <div className='mx-80 my-8 shadow-lg rounded-lg'>
                  <hr />
                </div>



              </div>

            </div>
          </div>
        )
      })}



    </>
  )
}
