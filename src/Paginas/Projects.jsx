import React from 'react'
import { db } from '../data/db'
import { Project } from '../components/Project';

export const Projects = ({ proyecto, setProyecto, proyectos, setProyectos }) => {

  const { id, nombre, imagen, descripcion, link } = db;
  // console.log(db.nombre)

  const hadleModal = () => {

  }
  
  return (

    <>
      <h1 className='titulo-proyecto'>Projects</h1>

      <div className='contenedor-proyecto grid-proyectos'>
        {db.map((project, index) => {
          return (
            <div key={index}>
              {/* {console.log(project, index)} */}




              <div className='alto-proyecto'>
                <div className='titulo-proyecto'>
                  <h2>{project.nombre}</h2>
                </div>

                <div className='contenedor-proyecto'>
                  <div className='img-proyecto'>
                    <img className=' border-gray-600 border- rounded-lg' src={"/img/" + project.imagen + ".jpg"} alt={"imagen proyecto " + project.nombre} />
                  </div>

                  <p className='p-proyecto font-bold text-lg bg-gray-200 rounded-lg shadow-xl text-opacity-70'>{project.descripcion}</p>

                  <div className='btn-proyecto'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-4 my-2 cursor-pointer'>See more</a>
                  </div>

                  <div className='shadow-lg rounded-lg'>
                    <hr />
                  </div>
                </div>
<<<<<<< HEAD
=======
                <p className='font-bold text-lg bg-gray-200 px-4 py-2 mt-4 rounded-lg shadow-xl text-opacity-70 mx-96 text-center'>{project.descripcion}</p>

                <div className='flex justify-center'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 my-2 cursor-pointer'>Go to project</a>
                  < button 
                  className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mx-4 my-2 cursor-pointer'
                  onClick={hadleModal}
                  >See more</button>
                </div>

                <div className='mx-80 my-8 shadow-lg rounded-lg'>
                  <hr />
                </div>



>>>>>>> 2547bf97e4929348cab6cd8ab9d8d50d4c7276f8
              </div>
            </div>

          )
        })}
      </div>
    </>
  )
}
