import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NavBar from './components/Navigation/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
