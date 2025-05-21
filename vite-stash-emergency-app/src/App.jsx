import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './components/HomePage';
import Plan from './components/Plan';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {


  return (
    <>
      <BrowserRouter>
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
