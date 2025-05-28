import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './components/HomePage';
import Plan from './components/PlanPg/Plan';
import Contact from './components/ContactPg/Contact';
import About from './components/AboutPg/About';
import './App.css';
import Navbar from './components/Navigation/Navbar';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="/plan" element={<Plan/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
