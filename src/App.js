import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/Mystory'
import Skills from './components/Myskills'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Myworks from './components/Myworks'
import portfolio from './data/portfolio.json'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Myworks />} portfolio={portfolio}/>
        </Route>
      </Routes>
    </>
  )
}

export default App