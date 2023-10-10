import React from 'react'

export const Slider = () => {
    return (
        <>

            <div className="slider">
                <em>Front-End</em>
                <h1>Developer</h1>
            </div>

            <div className='mx-8'>
                <div>
                    <h2 className="text-center mb-5 mt-16">About me</h2>
                </div>

                <div className="row mb-5 flex mx-28 px-12 lg:wx-auto ms:wx-auto">

                    <div className="col-md-6 mx-80 mb-28 md:w-1/2 lg:wx-auto">
                        <p>Hi! I am a software  engineer with a strong background in user interface design.</p>
                        <p>My experience spans various projects throughout my academic career, where I've honed my skills in both front-end and back-end development. I thrive in collaborative team environments, believing that the best results are achieved through collective efforts. I am dedicated and always strive to give my best in every adventure.</p>
                        <p>I currently work at the company Align Technology as a specialist cad designer and I would like to get into the programming environment from now on to go deeper into the world of digital creation and expand my knowledge in these topics, since I really like design and everything that goes with it.</p>

                        <div className='container row flex mt-12 my-8 img-fluid mb-4'>
                            
                                <img className='descuento2' src="/img/aboutme1.jpg" alt="sitio logo" />

                            <div className='col-6'>
                                <p className='ml-16 '>My aspiration is to immerse myself further in the technology sector, leveraging my creativity and expertise to create user-friendly, aesthetically pleasing software solutions. I am excited about the opportunity to collaborate, learn, and contribute to innovative projects within this dynamic industry.</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="descuento mb-32">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contenido">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
