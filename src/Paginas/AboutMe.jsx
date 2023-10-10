import React from 'react'

export const AboutMe = () => {
  return (
    <>
      <h1 className='flex justify-center mb-8'>AboutMe</h1>

      <div className="contenido row mb-5 flex mx-28 px-12 lg:wx-auto ms:wx-auto">

        <div className="col-md-6 mx-80 mb-28 md:w-1/2 lg:wx-auto">
          <p>Hi! My name is Keylor Delgado Castro, I'm 25 years old. </p>
          <p>I am a software  engineer with a strong background in user interface design.</p>
          <p>My experience spans various projects throughout my academic career, where I've honed my skills in both front-end and back-end development. I thrive in collaborative team environments, believing that the best results are achieved through collective efforts. I am dedicated and always strive to give my best in every adventure.</p>
          <p>I currently work at the company Align Technology as a specialist cad designer and I would like to get into the programming environment from now on to go deeper into the world of digital creation and expand my knowledge in these topics, since I really like design and everything that goes with it.</p>

          <div className='container row flex mt-12 my-8 img-fluid mb-4'>

            <img className='descuento2' src="/img/musica.jpg" alt="sitio logo" />

            <div className='col-6'>
              <p className='ml-16 '>I am a music lover, it is my main hobby and I would love to one day create my own music. My favorite genre is rock but actually I love music in general, I love any genre of music. My favorite instrument is the electric guitar, but I can also play acoustic guitar, percussions and ukulele.</p>
            </div>

          </div>

          <div className='container row flex mt-12 my-0 img-fluid mb-4'>
            <div className='col-6'>
              <p className='mr-16 '>My academic journey has equipped me with a strong theoretical background, while my hands-on experience has honed my practical skills. I have had the privilege of working on a variety of projects, from web applications to mobile apps, which has given me a broad perspective on the world of software development.</p>
            </div>

            <img className='descuento2' src="/img/aboutme1.jpg" alt="sitio logo" />
          </div>

          <div className='container row flex mt-12 my-0 img-fluid mb-4'>

            <img className='descuento2' src="/img/aboutme2.jpg" alt="sitio logo" />

            <div className='col-6'>
              <p className='ml-16 '>My aspiration is to immerse myself further in the technology sector, leveraging my creativity and expertise to create user-friendly, aesthetically pleasing software solutions. I am excited about the opportunity to collaborate, learn, and contribute to innovative projects within this dynamic industry.</p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
