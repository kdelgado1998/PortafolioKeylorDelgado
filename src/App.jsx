import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthLayout } from './Layout/AuthLayout'
import { Slider } from './components/Slider'
import { AboutMe } from './Paginas/AboutMe'
import { Projects } from './Paginas/Projects'
import { ContactMe } from './Paginas/ContactMe'
import { useState } from 'react'

function App() {

  const [proyecto, setProyecto] = useState({});
  const [proyectos, setProyectos] = useState([]);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Slider />}/>
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Projects" element={<Projects 
          proyecto={proyecto}
          setProyecto={setProyecto}
          proyectos={proyectos}
          setProyectos={setProyectos}
          />} />
          <Route path="ContactMe" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
