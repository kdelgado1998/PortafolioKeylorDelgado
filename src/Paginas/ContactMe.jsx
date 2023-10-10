import React from 'react'

export const ContactMe = () => {
  return (
    <>
      <h1 className='flex justify-center mb-8'>ContactMe</h1>


      <div className="container flex justify-center my-12">
        <div >

          <div className=''>
            <h1>Hi!</h1>
            <p>
              I am open for any feedback or suggestion related to this site.
            </p>
            <hr />

            <div>
              <h3>City</h3>
              <p>Cartago Costa Rica</p>
            </div>
            <hr />

            <div >
              <h3>Email</h3>
              <p>keylordelgado@gmail.com</p>
            </div>
            <hr />

            <div >
              <h3>Lets Talk</h3>
              <p>+506 (8492-2400)</p>
            </div>
            <hr />

          </div>

        </div>
      </div>
      <div className='flex justify-center'>
        <div>
          <h3> My social networks:</h3>
          <div className='flex justify-center'>
            <a href="https://www.facebook.com/keylor.delgadocastro">
              <img className="hover:scale-105 transition-transform duration-300" src={"/img/icono_facebook.png"} alt={"icono_facebook"} />
            </a>
            <a href="https://www.instagram.com/kdelgado__/">
              <img className="hover:scale-105 transition-transform duration-300" src={"/img/icono_IG.png"} alt={"icono_IG"} />
            </a>
            <a href="https://www.linkedin.com/in/keylor-delgado-castro-006222186/">
              <img className="hover:scale-105 transition-transform duration-300" src={"/img/icono_LI.png"} alt={"icono_LI"} />
            </a>
            <a href="https://github.com/kdelgado1998">
              <img className="hover:scale-105 transition-transform duration-300" src={"/img/logo_git.png"} alt={"icono_git"} />
            </a>
          </div>
        </div>
      </div>


    </>

  )
}
